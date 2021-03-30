import React, { useState, useEffect } from 'react';
import Colors from '../../../../colors'
import { StatusBar, } from 'react-native'
import { Container, Header, HistoryText,
        AttackView, Logo, LoadingIcon } from '../styles'
import AttackButton from './Buttons/AttackButton'
import SoundPlayer from 'react-native-sound-player'
import BackButton from './Buttons/BackButton';
import StopButton from './Buttons/StopButton';
import { useNavigation } from '@react-navigation/native';

export default () => {

    const navigation = useNavigation();

    const [playing, setPlaying] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        getHistory();
    }, []);

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
                <View style={{width: 100}}/>
                <Logo  source={require('./../../../images/logo.png')} />
            </Header>
            {loading ?
                    <LoadingIcon size="large" color="#FFFFFF" />
                :
                <>
                    <AttackView>
                        <HistoryText>Você está sendo atacado!!!</HistoryText>
                        <AttackButton onPress={_onAttackPress} />
                        <StopButton onPress={_onStopPress} />
                        <BackButton onPress={_onBackPress} />
                    </AttackView>
                </>
            }
        </Container>
    )
}