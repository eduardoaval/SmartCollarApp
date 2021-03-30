import React from 'react'
import styled from 'styled-components/native'
import Color from '../../../../../colors'

const AttackButton = styled.TouchableOpacity`
    background-color: ${Color.redButton};
    height: 175px;
    width: 175px;
    margin-vertical: 10px;
    border-radius: 88px;
    align-items: center;
    justify-content: center;
`

const AttackText = styled.Text`
    font-size: 30px;
    color: ${Color.textSecondary};
`

export default ({ onPress, disabled }) => {
    return (
        <AttackButton onPress={onPress} disabled={disabled}>
            <AttackText>Emitir Som</AttackText>
        </AttackButton>
    );
}