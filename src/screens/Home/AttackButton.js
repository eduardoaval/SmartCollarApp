import React from 'react'
import styled from 'styled-components/native'
import Color from '../../../colors'

const AttackButton = styled.TouchableOpacity`
    background-color: ${Color.primary};
    height: 200px;
    width: 200px;
    margin-vertical: 10px;
    border-radius: 100px;
    align-items: center;
    justify-content: center;
`

const AttackText = styled.Text`
    font-size: 30px;
    color: ${Color.textSecondary};
`

export default ({onPress}) => {
    return(
        <AttackButton onPress={onPress}>
            <AttackText>Emitir Som</AttackText>
        </AttackButton>
    );
}