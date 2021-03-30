import React, { useState, useEffect } from 'react';
import { Container, Body }  from './styles.js'
import { StatusBar } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';
import { Logo } from './styles.js';
import Colors from '../../../colors'

export default () => {

    const navigation = useNavigation();


    useEffect(()=>{
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('token');
            console.log(token)
            if(token) {
                    navigation.reset({
                        routes:[{name:'Home'}]
                    });
            } else {
                navigation.reset({
                    routes:[{name:'SignIn'}]
                });
            }
        }
        checkToken();
    }, []);

    return(
        <Container>
            <StatusBar barStyle="dark-content" hidden={true} backgroundColor={Colors.primary} translucent={false} />
            <Body>
                <Logo source={require('./../../images/logo.png')}/>
            </Body>
        </Container>
    );

}