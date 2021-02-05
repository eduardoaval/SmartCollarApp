import React from 'react'
import styled from 'styled-components/native'
import Color from '../../../colors'

export const Container = styled.SafeAreaView`
  background-color: ${Color.primary};
  flex:1
`

export const Header = styled.View`
    background-color: ${Color.primary};
    height: 13%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`
export const HeaderText = styled.Text`
    font-size: 26px;
    color: ${Color.textPrimary};
`

export const Body = styled.ScrollView`
    flex:1;
`

export const HistoryText = styled.Text`
    font-size: 20px;
    color: ${Color.textPrimary};
`

export const HistoryLabelView = styled.View`
    background-color: ${Color.secondary};
    height: 7%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
`

export const HistoryItemView = styled.View`
    background-color: ${Color.primary};
    height: 70px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-width: 2px;
    border-radius: 40px;
    border-color: ${Color.secondary}
    margin-vertical: 10px;
    margin-horizontal: 4px;
`

export const AttackView = styled.View`
    background-color: ${Color.secondary};
    flex:1
    align-items: center;
    justify-content: center;
`
