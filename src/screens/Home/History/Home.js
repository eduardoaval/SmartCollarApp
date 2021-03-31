import React, { useState, useEffect } from 'react';
import Colors from '../../../../colors'
import { FlatList, StatusBar } from 'react-native'
import { Container, Header, HistoryText, HistoryLabelView,
     Logo, LoadingIcon, GoBackButton } from '../styles'
import HistoryItemView from './HistoryItem'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import { GetUserHistory } from '../../../api/history-service';
import * as Mqtt from 'react-native-native-mqtt';
import { request, PERMISSIONS } from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';
import { calcCrow } from '../../../util/coords';

const client = new Mqtt.Client('tcp://mqtt.tago.io:1883');


export default () => {

    const navigation = useNavigation();
    const [notificationData, setNotificationData] = useState([])
    const [historyData, setHistoryData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        _getHistory();
        _connectToBroker();
    }, []);

    const _connectToBroker = async() => {
        let user = await AsyncStorage.getItem('user');
        client.connect({
            clientId: '2008',
            username: user,
            password: '541fb442-cb65-4d32-ad5d-367c49c01832',
            timeout:5,
        }, err => {
        });

        client.on(Mqtt.Event.Message, (topic, message) => {
            console.log("Message");
            _onReceivedNotification(topic, message)
        });
        client.on(Mqtt.Event.Connect, () => {
            console.log("Connect");
            client.subscribe(['notification'], [0])
        });
        client.on(Mqtt.Event.Disconnect, () => {
            console.log("Disconnect");
        });
        client.on(Mqtt.Event.Error, () => {
            console.log("error");
        });
    }

    const _getHistory = async () => {
        setLoading(true);
        let notifications = await AsyncStorage.getItem('notifications');
        if(notifications != null)
            setNotificationData(JSON.parse(notifications));
        //setHistoryData([{ description: 'Ataque por cachorro', id: '0' }, { description: 'Ataque por cachorro 2', id: '1' }]);
        GetUserHistory()
        .then(responseJson => {
            setHistoryData(responseJson)
            setLoading(false);
        })
        .catch(error => {
            console.log(error);
            setLoading(false);
        })
    }

    _renderItem = ({ item }) => {
        return (
            <HistoryItemView onPress={() => _onItemPressed(item)} description={item.description}/>
        );
    }

    const _onLogoutButtonPressed = async () => {
        await AsyncStorage.removeItem('token');
        await AsyncStorage.removeItem('user');
        await AsyncStorage.removeItem('name');
        navigation.reset({
            routes:[{name:'SignIn'}]
        });
        client.disconnect();
    }

    _onItemPressed = (item) => {
        let canEdit = false;
        if(item.key != null)
            canEdit = true;

        navigation.navigate('ListDescription', {item, canEdit, onNotificationSent:onNotificationSent.bind(this)});
    }

    const onNotificationSent = async(notification_id) => {
        let notificationsString = await AsyncStorage.getItem('notifications');
        let notifications = notificationsString != null? JSON.parse(notificationsString): [];
        notifications = notifications.filter(x=> x.notification_id != notification_id);
        await AsyncStorage.setItem('notifications', JSON.stringify(notifications));
        setNotificationData(notifications);
    }

    const _handleLocation = async(notification,) => {
        let notificationsString = await AsyncStorage.getItem('notifications');
        let notifications = notificationsString != null? JSON.parse(notificationsString): [];
        let result = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
        if(result == 'granted')
        {
            Geolocation.getCurrentPosition(async(info) => {
                let distanceKm = calcCrow(notification.location.lat,notification.location.lng,
                    -3.7711215, -38.511261);
                if(distanceKm <= 0.1)
                {
                    notification.description = "Sem descrição"
                    notification.key = notifications.length.toString();
                    notifications.push(notification);
        
                    await AsyncStorage.setItem('notifications', JSON.stringify(notifications));
                    setNotificationData(notifications);
                    navigation.navigate('DogAttack', {notification:notification});
                }
            })
        }
    }

    const _onReceivedNotification = (topic, message) => {
        let messageJson = JSON.parse(message);
        _handleLocation(messageJson);
    }    

    return (
        <Container>
            <StatusBar barStyle="dark-content" hidden={true} backgroundColor={Colors.primary} translucent={false} />
            <Header>
                <GoBackButton onPress={_onLogoutButtonPressed}/>
                <Logo  source={require('./../../../images/logo.png')} />
            </Header>
            {loading ?
                    <LoadingIcon size="large" color="#FFFFFF" />
                    :
                <>
                    <HistoryLabelView>
                        <HistoryText>Histórico de notificaçoes</HistoryText>
                    </HistoryLabelView>
                    {
                        notificationData.length > 0?
                        <>
                        <HistoryLabelView>
                            <HistoryText>Novas notificações</HistoryText>
                        </HistoryLabelView>
                        <FlatList
                            data={notificationData}
                            renderItem={this._renderItem}
                            keyExtractor={(item) => item.notificationId}
                            extraData={notificationData}
                        />
                        <HistoryLabelView>
                            <HistoryText>Histórico</HistoryText>
                        </HistoryLabelView>
                        </>
                        : null
                    }
                    <FlatList
                        data={historyData}
                        renderItem={this._renderItem}
                        keyExtractor={(item) => item.notificationId}
                    />
                </>
        }
        </Container>
    )
}