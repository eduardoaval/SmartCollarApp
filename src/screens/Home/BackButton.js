import React from 'react'
import styled from 'styled-components/native'
import Color from '../../../colors'

const AttackButton = styled.TouchableOpacity`
    background-color: ${Color.blueButton};
    height: 125px;
    width: 125px;
    margin-vertical: 10px;
    border-radius: 63px;
    align-items: center;
    justify-content: center;
`

const AttackText = styled.Text`
    font-size: 25px;
    color: ${Color.textSecondary};
`

export default ({ onPress, disabled }) => {
    return (
        <AttackButton onPress={onPress} disabled={disabled}>
            <AttackText>Voltar</AttackText>
        </AttackButton>
    );
}