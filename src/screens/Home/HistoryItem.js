import React from 'react'
import styled from 'styled-components/native'
import Color from '../../../colors'

const HistoryItemView = styled.TouchableOpacity`
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

const HistoryText = styled.Text`
    font-size: 20px;
    color: ${Color.textPrimary};
`

export default ({ onPress, description }) => {
    return (
        <HistoryItemView onPress={onPress}>
            <HistoryText>{description}</HistoryText>
        </HistoryItemView>
    );
}