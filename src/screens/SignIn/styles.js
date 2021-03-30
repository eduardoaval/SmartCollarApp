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
  marginBottom: 20px;
`

export const PasswordInput = styled.TextInput`
  width: 90%;
  borderRadius: 30px;
  height: 70px
  background-color: ${Color.primary};
  color: ${Color.textPrimary};
  font-size: 20px;
  marginBottom: 10px;
`

export const Logo = styled.Image`
  height: 100px;
  width: 100px;
  border-radius: 50px
  marginBottom: 20px;
`

export const LoginButton = styled.TouchableOpacity`
  background-color: ${Color.primary};
  height: 70px
  width: 50%;
  margin-vertical: 10px;
  borderRadius: 30px;
  align-items: center;
  justify-content: center;
`

export const LoginText = styled.Text`
  font-size: 25px;
  color: ${Color.textSecondary};
`

export const SignUpButton = styled.TouchableOpacity`
  
`

export const LabelText = styled.Text`
  font-size: 14px;
  color: ${Color.textPrimary};
`