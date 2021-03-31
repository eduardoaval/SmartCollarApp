import React, { useState } from 'react';
import Colors from '../../../../colors'
import { StatusBar, View} from 'react-native'
import  CheckBox  from '@react-native-community/checkbox'
import { Container, Header, HistoryText, Logo, DescriptionView,
     DescriptionInput, DescriptionButton, DescriptionBackButton,
      LoadingIcon, CheckBoxView, Center } from '../styles'
import { useNavigation, useRoute } from '@react-navigation/native';
import { SaveNotification } from '../../../api/history-service';
import AsyncStorage from '@react-native-community/async-storage';

export default () => {

    const navigation = useNavigation();
    const route = useRoute();
    const historyData = route.params.item;
    const canEdit = route.params.canEdit;
    const onNotificationSent = route.params.onNotificationSent;
    
    const [descriptionText, setDescriptionText] = useState('');
    const [loading, setLoading] = useState(false);
    const [confirm, setConfirm] = useState(true);

    const _onSendAttackResponse = async() =>{
        setLoading(true)
        let token = await AsyncStorage.getItem('token');
        var notification =
        {
            device_id: historyData.device_id,
            notification_id: historyData.notification_id,
            observation: {
                observation: descriptionText,
                token: token,
                confirm: confirm
            }
        }
        SaveNotification(notification)
        .then((responseJson)=> {
            onNotificationSent(historyData.notification_id);
            navigation.goBack();
            setLoading(false);
        })
        .catch((error)=>{
            console.log(error);
        })
        
    }

    return (
        <Container>
            <StatusBar barStyle="dark-content" hidden={true} backgroundColor={Colors.primary} translucent={false} />
            <Header>
                <View style={{width: 125}}/>
                <Logo  source={require('./../../../images/logo.png')} />
            </Header>
            {
                loading?
                        <LoadingIcon size="large" color="#FFFFFF" />
                        :
                <>
                <DescriptionBackButton onPress={() => {navigation.goBack()}}>
                    <HistoryText>Voltar</HistoryText>
                </DescriptionBackButton>
                <Center>
                    <HistoryText>{historyData.description}</HistoryText>
                </Center>
                <DescriptionView>
                    <DescriptionInput value={descriptionText} onChangeText={(text) => setDescriptionText(text)} placeholder="Atacado por cachorro bravo!" multiline={true}/>
                    <CheckBoxView>
                        <CheckBox value={confirm} onValueChange={(value) => {setConfirm(value)}}/>
                        <HistoryText>Confirmar Ataque</HistoryText>
                    </CheckBoxView>
                    <DescriptionButton onPress={() => _onSendAttackResponse()} disabled={!canEdit}>
                        <HistoryText>Enviar</HistoryText>
                    </DescriptionButton>
                </DescriptionView>
                </>
            }
        </Container>
    )
}