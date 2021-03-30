import React, { useState } from 'react';
import { Container, Body, UsernameInput, PasswordInput, Logo, LabelText, LoginButton, LoginText }  from './styles.js'
import { StatusBar } from 'react-native'
import Colors from '../../../colors'

export default () => {

    const [nickname, setNickname] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

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
                <LoginButton onPress={() => _onLoginPressed()}>
                    <LoginText>Cadastrar</LoginText>
                </LoginButton>
            </Body>
        </Container>
    );

}