import React, { useState} from 'react';
import Colors from '../../../colors'
import { FlatList, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { Container, Header, HeaderText, HistoryText, HistoryLabelView, HistoryItemView, AttackView} from './styles'
import AttackButton from './AttackButton'
import SoundPlayer from 'react-native-sound-player'

export default () => {

    const [attack, setAttackState] = useState(true);

    _renderItem = ({item}) => {
        return(
            <HistoryItemView>
                <HistoryText>{item.description}</HistoryText>
            </HistoryItemView>
          );
    }

    const _onReceivedNotification= () =>{
        setAttackState(true);
    }
    
    const _onAttackPress = () => {
        try {
            alert('play')
            SoundPlayer.playSoundFile('dezoitokhz', 'mp3')
        } catch (e) {
            alert('deu ruim')
            console.log(`cannot play the sound file`, e)
        }
    }

    return(
        <Container>
            <StatusBar barStyle = "dark-content" hidden = {true} backgroundColor = {Colors.primary} translucent = {false}/>
            <Header>
                <HeaderText>Smart Collar</HeaderText>
            </Header>
            {
                attack &&
                <>
                <AttackView>
                    <AttackButton onPress={_onAttackPress}/>
                </AttackView>
                </>
            }
            {  !attack &&
                <>
                    <HistoryLabelView>
                        <HistoryText>Histórico de notificaçoes</HistoryText>
                    </HistoryLabelView>
                    <FlatList
                    data={[{description:'Ataque por cachorro', id:'0'}, {description:'Ataque por cachorro 2', id:'1'}]}
                    renderItem={this._renderItem}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={{flex:1}}
                    />
                </>
            }
            
        </Container>
    )
}