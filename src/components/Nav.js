import React from 'react';
import { Header, Left, Body, Button, Right, Icon, Text} from 'native-base';
import { StyleSheet } from 'react-native'



export default function Nav({openDrawer, changePage, page, totalPages}) {

  return (
    <Header>
      <Left>
        <Button transparent onPress={openDrawer}>
          <Icon name='menu' />
        </Button>
      </Left>
      <Body>
          <Text style={styles.title}>Pokedex</Text>
      </Body>
      <Right>
        <Button transparent disabled={page === 1} onPress={() => changePage(false)}>
          <Icon name='arrow-back' />
        </Button>
        <Body>
          <Text style={styles.page}>{page}</Text>
        </Body>
        <Button transparent disabled={(totalPages - page) < 1} onPress={() => changePage(true)}>
          <Icon name='arrow-forward' />
        </Button>
      </Right>
    </Header>
  );
}

const styles = StyleSheet.create({
  title:{
    color: 'white',
    fontSize: 20,
    width: '100%'
  },
  page:{
    color: 'white',
    fontSize: 15,
    textAlign: 'center'
  }
})

