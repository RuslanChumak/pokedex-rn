import React from "react";
import {
  Modal,
  StyleSheet,
  View,
  Image,
  ScrollView
} from "react-native";
import { List, Header, Left, Icon, Button, Body, Text, Right} from "native-base";

import BaseStats from './BaseStats'
import BattleStats from "./BattleStats";
import AbilitiesList from "./AbilitiesList";
import EvolutionChain from "./EvolutionChain";

const PokemonModal = ({data, isOpenModal, handleModal}) => {


  return (
    <View style={styles.centeredView}>
        {data.name &&(
            
            <Modal
                animationType="slide"
                transparent={true}
                visible={isOpenModal}
                onRequestClose={() => {
                    handleModal(false)
                }}
                >   
                <View style={styles.centeredView}>
                  <View style={styles.header}>
                    <Header >
                      <Left>
                        <Button transparent onPress={() => handleModal(false)}>
                            <Icon name='arrow-back'></Icon>
                        </Button>
                      </Left>
                      <Body>
                        <Text style={styles.Title}>{data.name[0].toUpperCase() + data.name.slice(1)}</Text>
                      </Body>
                      <Right />
                  </Header>
                  </View>
                <ScrollView style={styles.scroll}>
                    <View style={styles.modalView}>
                      <Image style={styles.image} source={{uri: data.sprites.front_default}} />
                      <List>
                        <BaseStats data={data} />
                        <BattleStats data={data} />   
                        <AbilitiesList data={data}/>          
                      </List> 
                      <EvolutionChain data={data.species}/>
                    </View>
                  </ScrollView>
                </View>
                
            </Modal>
            
        )}
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: '100%'
  },
  Title:{
      fontSize: 17,
      textAlign: 'center',
      fontWeight: '900',
      color: 'white'
  },
  image:{
    resizeMode: 'contain',
    height: 200,
    margin: 10

  },
  scroll:{
    width: '100%'
  },
  modalView: {
    width: '100%',
    backgroundColor: "white",
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  header: {
    width: '100%'
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default PokemonModal;
