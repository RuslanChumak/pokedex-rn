import React, {useEffect, useState} from 'react';
import { StyleSheet, Image, ActivityIndicator } from 'react-native';
import { View } from 'native-base';
export default function Ability({ name }) {
    const [info, setInfo] = useState({})
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() =>{
        fetch("https://pokeapi.co/api/v2/pokemon/"+name)
        .then(res => res.json())
        .then(res =>{
            setInfo(res.sprites.front_default)
            setIsLoaded(true)
        })
    }, [isLoaded])
  return (
      
      <View>
          {isLoaded && (
            <Image style={styles.image} source={{uri: info}} />
          )}
          {!isLoaded && (
                <ActivityIndicator />
          )}
      </View>
  );
}

const styles = StyleSheet.create({
    image:{
        width: 50,
        height: 50
    }
})

