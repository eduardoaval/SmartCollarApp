import React from 'react'
import styled from 'styled-components/native'
import Color from '../../../colors'

export const Container = styled.SafeAreaView`
  background-color: ${Color.secondary};
  flex:1;
`

export const Body = styled.View`
  flex:1;
  justifyContent: center;
  alignItems: center;
`
export const UsernameInput = styled.TextInput`
  width: 90%;
  borderRadius: 30px;
  height: 70px
  background-color: ${Color.primary};
  color: ${Color.textPrimary};
  font-size: 20px;
  marginVertical: 20px;
`

export const PasswordInput = styled.TextInput`
  width: 90%;
  borderRadius: 30px;
  height: 70px
  background-color: ${Color.primary};
  color: ${Color.textPrimary};
  font-size: 20px;
  marginVertical: 20px;
`

export const Logo = styled.Image`
  height: 100px;
  width: 100px;
  marginBottom: 20px;
`

export const LoginButton = styled.TouchableOpacity`
    background-color: ${Color.primary};
    height: 125px;
    width: 125px;
    margin-vertical: 10px;
    border-radius: 63px;
    align-items: center;
    justify-content: center;
`

export const LoginText = styled.Text`
    font-size: 25px;
    color: ${Color.textSecondary};
`