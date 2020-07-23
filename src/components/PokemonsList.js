import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Pokemon from './Pokemon'
import PokemonModal from './PokemonModal'

export default function PokemonsList({data}) {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [info, setInfo] = useState({})
  let openModal = (data) =>{
    if(!isOpenModal){
      setInfo(data)
      setIsOpenModal(true)
    }
  }

  return (
    <View style={styles.container}>
      {isOpenModal && (
        <PokemonModal data={info} isOpenModal={isOpenModal} handleModal={setIsOpenModal}/>
      )}
      
       {data.map(item =>
        <Pokemon key={item.name} data={item} setIsOpenModal={openModal}/>
        )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20
  }
});
