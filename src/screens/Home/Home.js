import React, { useState } from 'react';
import Colors from '../../../colors'
import { FlatList, Image, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { Container, Header, HeaderText, HistoryText, HistoryLabelView, AttackView, Logo, DescriptionView, DescriptionInput, DescriptionButton, DescriptionBackButton } from './styles'
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

    _renderItem = ({ item }) => {
        return (
            <HistoryItemView onPress={() => item.id == '1'?setDescription(true):setAttackState(true)} description={item.description}/>
        );
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

    return (
        <Container>
            <StatusBar barStyle="dark-content" hidden={true} backgroundColor={Colors.primary} translucent={false} />
            <Header>
                <Logo  source={require('./../../images/logo.png')} />
            </Header>
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
                        data={[{ description: 'Ataque por cachorro', id: '0' }, { description: 'Ataque por cachorro 2', id: '1' }]}
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
                    
                    <DescriptionInput value={descriptionText} onChangeText={(text) => setDescriptionText(text)}/>
                    <DescriptionButton onPress={() => {setDescription(false); setDescriptionText('')}}>
                        <HistoryText>Enviar</HistoryText>
                    </DescriptionButton>
                </DescriptionView>
                </>
            }
        </Container>
    )
}