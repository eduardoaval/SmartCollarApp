import React, { useState } from 'react';
import { Container, Body, UsernameInput, PasswordInput, Logo }  from './styles.js'
import { StatusBar } from 'react-native'
import Colors from '../../../colors'

export default () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return(
        <Container>
            <StatusBar barStyle="dark-content" hidden={true} backgroundColor={Colors.primary} translucent={false} />
            <Body>
                <Logo source={require("./../../images/logo.png")}/>
                <UsernameInput value={username} onChangeText={(text) => setUsername(text)}/>
                <PasswordInput value= {password}  onChangeText={(text) => setPassword(text)} secureTextEntry={true}/>
            </Body>
        </Container>
    );

}