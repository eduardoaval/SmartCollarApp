import React, { useState } from 'react';
import Colors from '../../../../colors'
import { StatusBar, View} from 'react-native'
import  CheckBox  from '@react-native-community/checkbox'
import { Container, Header, HistoryText, Logo, DescriptionView,
     DescriptionInput, DescriptionButton, DescriptionBackButton,
      LoadingIcon, CheckBoxView, Center } from '../styles'
import { useNavigation, useRoute } from '@react-navigation/native';

export default () => {

    const navigation = useNavigation();
    const route = useRoute();
    const historyData = route.params.item;
    const canEdit = route.params.canEdit;
    console.log(canEdit)
    
    const [descriptionText, setDescriptionText] = useState('');
    const [loading, setLoading] = useState(false);
    const [confirm, setConfirm] = useState(true);

    const _onSendAttackResponse = () =>{
        
        var json =
        [{
            device_id: "6008ccff9da25300273d88bd",
            notification_id: "{950314AB-5E74-4727-AE24-0C28C69BA1DF}",
            observation: {
                observation: descriptionText,
                user_id: "E9E39946-C976-4361-9118-AD9D3AACCB06",
                confirm: confirm
            }
        }
        ];
        navigation.goBack();
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