import React from 'react'
import styled from 'styled-components/native'
import Color from '../../../colors'

export const Container = styled.SafeAreaView`
  background-color: ${Color.secondary};
  flex:1
`

export const Header = styled.View`
    background-color: ${Color.backgroundColor};
    height: 13%;
    flex-direction: row;
    align-items: center;
`
export const GoBackButton = styled.TouchableOpacity`
    background-color: ${Color.primary};
    height: 30px;
    width: 30px;
    border-radius: 15px;
    margin-right: 75px;
    margin-left: 20px;
`

export const HeaderText = styled.Text`
    font-size: 26px;
    color: ${Color.secondary};
`

export const Body = styled.ScrollView`
    flex:1;
`

export const HistoryText = styled.Text`
    font-size: 20px;
    color: ${Color.textPrimary};
`

export const HistoryLabelView = styled.View`
    background-color: ${Color.terceary};
    height: 7%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const AttackView = styled.View`
    background-color: ${Color.secondary};
    flex:1
    align-items: center;
    justify-content: center;
`

export const Logo = styled.Image`
    height: 100px;
    width: 100px;
    border-radius: 50px;
    left: 5px;
`

export const DescriptionView = styled.View`
    background-color: ${Color.secondary};
    align-items: center;
    justify-content: center;
    flex: 1;
    margin-horizontal: 20px
`

export const DescriptionInput = styled.TextInput`
    width: 100%;
    border-radius: 30px;
    height: 60px
    background-color: ${Color.primary};
    color: ${Color.textPrimary};
    font-size: 16px;
    padding:10px;
`

export const DescriptionButton = styled.TouchableOpacity`
    margin-top: 30px;
    width: 100%;
    border-radius: 30px;
    height: 70px
    background-color: ${Color.primary};
    color: ${Color.textPrimary};
    align-items: center;
    justify-content: center;
`

export const DescriptionBackButton = styled.TouchableOpacity`
    background-color: ${Color.primary};
    height: 7%;
    flex-direction: row;
    padding-left: 20px;
    align-items: center;
`
export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 50px;
`;

export const CheckBoxView = styled.View`
    flex-direction: row;
    margin-top: 20px;
`;

export const Center = styled.View`
    align-items: center;
    justify-content: center;
    padding: 20px;
`; 