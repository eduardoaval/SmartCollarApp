import React, { useState, useEffect } from 'react';
import Colors from '../../../colors'
import { FlatList, Image, StatusBar, Text, TouchableOpacity } from 'react-native'
import  CheckBox  from '@react-native-community/checkbox'
import { Container, Header, HeaderText, HistoryText, HistoryLabelView, AttackView, Logo, DescriptionView, DescriptionInput, DescriptionButton, DescriptionBackButton, LoadingIcon, CheckBoxView } from './styles'
import AttackButton from './AttackButton'
import SoundPlayer from 'react-native-sound-player'
import BackButton from './BackButton';
import StopButton from './StopButton';
import HistoryItemView from './HistoryItem'

export default () => {

    const [attack, setAttackState] = useState(false);
    const [playing, setPlaying] = useState(false);
    const [description, setDescription] = useState(false);
    const [descriptionText, setDescriptionText] = useState('');
    const [historyData, setHistoryData] = useState([]);
    const [history, setHistory] = useState(null);
    const [loading, setLoading] = useState(true);
    const [confirm, setConfirm] = useState(true);

    const getHistory = async () => {
        setLoading(true);
        setHistoryData([{ description: 'Ataque por cachorro', id: '0' }, { description: 'Ataque por cachorro 2', id: '1' }]);

        setLoading(false);
    }

    useEffect(()=>{
        getHistory();
    }, []);

    _renderItem = ({ item }) => {
        return (
            <HistoryItemView onPress={() => _onItemPressed(item)} description={item.description}/>
        );
    }

    _onItemPressed = (item) => {
        setDescription(true);
        setHistory(item)
    }

    const _onReceivedNotification = () => {
        setAttackState(true);
    }    

    const _onAttackPress = () => {
        try {
            SoundPlayer.playSoundFile('dezoitokhz', 'mp3')
            setPlaying(true);
        } catch (e) {
            setPlaying(false);
            console.log(`cannot play the sound file`, e)
        }
    }

    const _onStopPress = () => {
        try {
            SoundPlayer.stop()
            setPlaying(false)
        }
        catch (e) {
            console.log(`cannot play the sound file`, e)
        }
    }

    const _onBackPress = () => {
        try {
            SoundPlayer.stop()
            setPlaying(false)
            setAttackState(false)
        }
        catch (e) {
            console.log(`cannot play the sound file`, e)
        }
    }

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
        setDescription(false); 
        setDescriptionText('');
    }

    return (
        <Container>
            <StatusBar barStyle="dark-content" hidden={true} backgroundColor={Colors.primary} translucent={false} />
            <Header>
                <Logo  source={require('./../../images/logo.png')} />
            </Header>
            {loading &&
                    <LoadingIcon size="large" color="#FFFFFF" />
                }
            {
                !description && (attack?
                <>
                    <AttackView>
                        <HistoryText>Você está sendo atacado!!!</HistoryText>
                        <AttackButton onPress={_onAttackPress} />
                        <StopButton onPress={_onStopPress} />
                        <BackButton onPress={_onBackPress} />
                    </AttackView>
                </>
                :
                <>
                    <HistoryLabelView>
                        <HistoryText>Histórico de notificaçoes</HistoryText>
                    </HistoryLabelView>
                    <FlatList
                        data={historyData}
                        renderItem={this._renderItem}
                        keyExtractor={(item) => item.id}
                        contentContainerStyle={{ flex: 1 }}
                    />
                </>)
            }
            {
                description && 
                <>
                <DescriptionBackButton onPress={() => {setDescription(false); setDescriptionText('')}}>
                    <HistoryText>Voltar</HistoryText>
                </DescriptionBackButton>
                <DescriptionView>
                    
                    <DescriptionInput value={descriptionText} onChangeText={(text) => setDescriptionText(text)} placeholder="Atacado por cachorro bravo!" multiline={true}/>
                    <CheckBoxView>
                        <CheckBox value={confirm} onValueChange={(value) => {setConfirm(value)}}/>
                        <HistoryText>Confirmar Ataque</HistoryText>
                    </CheckBoxView>
                    <DescriptionButton onPress={() => _onSendAttackResponse()}>
                        <HistoryText>Enviar</HistoryText>
                    </DescriptionButton>
                </DescriptionView>
                </>
            }
        </Container>
    )
}