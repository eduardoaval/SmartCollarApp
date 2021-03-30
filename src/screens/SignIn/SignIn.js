import React, { useState } from 'react';
import { StatusBar } from 'react-native'
import { Container, Body, UsernameInput, PasswordInput, Logo, LoginButton, LoginText, SignUpButton, LabelText }  from './styles.js'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import Colors from '../../../colors'
import { LoginUser } from '../../api/login-service.js';
import { LoadingIcon } from '../Home/styles.js';

export default () => {

    const navigation = useNavigation();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const _onLoginPressed = () => {
        setLoading(true);
        LoginUser(username, password)
        .then(responseJson => {
            if(responseJson)
            {
                AsyncStorage.setItem('token', responseJson.token);
                AsyncStorage.setItem('user', username);
                navigation.reset({
                    routes:[{name:'Home'}]
                });
            }
            setLoading(false);
        })
        .catch(error => {
            setLoading(false);
        })
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
                {
                    loading ?
                    <LoadingIcon size="large" color="#FFFFFF" />
                    :
                    <>
                    <LoginButton onPress={() => _onLoginPressed()}>
                        <LoginText>Login</LoginText>
                    </LoginButton>
                    <SignUpButton onPress={() => navigation.navigate('SignUp')}>
                    <   LabelText>Não tem conta? Cadastre-se</LabelText>
                    </SignUpButton>
                    </>
                }
                
            </Body>
        </Container>
    );

}