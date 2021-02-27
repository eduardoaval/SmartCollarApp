import React, { useState } from 'react';
import { StatusBar } from 'react-native'
import { Container, Body, UsernameInput, PasswordInput, Logo, LoginButton, LoginText, SignUpButton, LabelText }  from './styles.js'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import Colors from '../../../colors'

export default () => {

    const navigation = useNavigation();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const _onLoginPressed = () => {
        navigation.navigate('Home')
    }

    return(
        <Container>
            <StatusBar barStyle="dark-content" hidden={true} backgroundColor={Colors.primary} translucent={false} />
            <Body>
                <Logo source={require("./../../images/logo.png")}/>
                <LabelText>Usuário</LabelText>
                <UsernameInput value={username} onChangeText={(text) => setUsername(text)}/>
                <LabelText>Senha</LabelText>
                <PasswordInput value= {password}  onChangeText={(text) => setPassword(text)} secureTextEntry={true}/>
                <LoginButton onPress={() => _onLoginPressed()}>
                    <LoginText>Login</LoginText>
                </LoginButton>
                <SignUpButton onPress={() => navigation.navigate('SignUp')}>
                    <LabelText>Não tem conta? Cadastre-se</LabelText>
                </SignUpButton>
            </Body>
        </Container>
    );

}