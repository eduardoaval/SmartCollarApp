import React, { useState, useEffect } from 'react';
import Colors from '../../../../colors'
import { FlatList, StatusBar } from 'react-native'
import { Container, Header, HistoryText, HistoryLabelView,
     Logo, LoadingIcon, GoBackButton } from '../styles'
import HistoryItemView from './HistoryItem'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import { GetUserHistory } from '../../../api/history-service';

export default () => {

    const navigation = useNavigation();

    const [historyData, setHistoryData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        getHistory();
    }, []);

    const getHistory = async () => {
        setLoading(true);
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
        await AsyncStorage.setItem('name');
        navigation.reset({
            routes:[{name:'SignIn'}]
        });
    }

    _onItemPressed = (item) => {
        if(item.id == '1')
        {
            _onReceivedNotification()
            return;
        }
        let canEdit = true;
        if(item.notificationId && historyData.filter(x=> x.notificationId != item.notificationId) != null)
            canEdit = false;

        navigation.navigate('ListDescription', {item, canEdit});
    }

    const _onReceivedNotification = () => {
        navigation.navigate('DogAttack');
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