import React, { useState } from 'react';
import { Container, Body, UsernameInput, PasswordInput, Logo, LabelText, LoginButton, LoginText }  from './styles.js'
import { StatusBar } from 'react-native'
import Colors from '../../../colors'
import AsyncStorage from '@react-native-community/async-storage';
import { CreateUser } from '../../api/login-service.js';
import { LoadingIcon } from '../Home/styles.js';
import { useNavigation } from '@react-navigation/native';

export default () => {

    const navigation = useNavigation();

    const [nickname, setNickname] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const _onCreateUserPressed = () => {
        setLoading(true);
        CreateUser(nickname, username, password)
        .then(responseJson => {
            if(responseJson)
            {
                console.log(responseJson);
                AsyncStorage.setItem('token', responseJson.token)
                navigation.reset({
                    routes:[{name:'Home'}]
                });
            }
            setLoading(false);
        })
        .catch(error => {
            console.log(error)
            setLoading(false);
        })
    }

    return(
        <Container>
            <StatusBar barStyle="dark-content" hidden={true} backgroundColor={Colors.primary} translucent={false} />
            <Body>
                <LabelText>Apelido</LabelText>
                <UsernameInput value={nickname} onChangeText={(text) => setNickname(text)}/>
                <LabelText>Usuário</LabelText>
                <UsernameInput value={username} onChangeText={(text) => setUsername(text)}/>
                <LabelText>Senha</LabelText>
                <PasswordInput value= {password}  onChangeText={(text) => setPassword(text)} secureTextEntry={true}/>
                {
                    loading ? <LoadingIcon size="large" color="#FFFFFF" />
                    :
                    <LoginButton onPress={() => _onCreateUserPressed()}>
                        <LoginText>Cadastrar</LoginText>
                    </LoginButton>
                }
            </Body>
        </Container>
    );

}