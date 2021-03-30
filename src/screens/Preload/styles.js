import React from 'react'
import styled from 'styled-components/native'
import Color from '../../../colors'

export const Container = styled.SafeAreaView`
  background-color: ${Color.secondary};
  flex:1
`

export const Body = styled.View`
  flex:1;
  justifyContent: center;
  alignItems: center;
`
export const Logo = styled.Image`
    height: 100px;
    width: 100px;
    border-radius: 50px;
`
