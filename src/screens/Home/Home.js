import React from 'react';
import Colors from '../../../colors'
import { FlatList, StatusBar, Text } from 'react-native'
import { Container, Header, HeaderText, HistoryText, HistoryLabelView } from './styles'

export default () => {

    _renderItem = ({item}) => {
        return(
            <HistoryText>{item.description}</HistoryText>
          );
    }

    return(
        <Container>
            <StatusBar barStyle = "dark-content" hidden = {true} backgroundColor = {Colors.primary} translucent = {false}/>
            <Header>
                <HeaderText>Smart Collar</HeaderText>
            </Header>
            <HistoryLabelView>
                <HistoryText>Histórico de notificaçoes</HistoryText>
            </HistoryLabelView>
            <FlatList
            data={[{description:'Ataque por cachorro', id:0}, {description:'Ataque por cachorro 2', id:1}]}
            renderItem={this._renderItem}
            keyExtractor={({item}) => item.id}
            />
        </Container>
    )
}