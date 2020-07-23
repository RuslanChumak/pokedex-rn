import React, {useState, useEffect} from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, CardItem, Thumbnail, Left, Body, Text, Right } from 'native-base'

export default function Pokemon({data, setIsOpenModal}) {
    const [info, setInfo] = useState({})
    const [isLoaded, setIsLoaded] = useState(false)
    
    useEffect(() =>{
        fetch(data.url)
        .then(res => res.json())
        .then(res =>{
            setInfo(res)
            setIsLoaded(true)
        })
    }, [isLoaded])

    return (
        
        <View onTouchStart={() =>setIsOpenModal(info)}>
            
            {isLoaded && (
                
                <Card >
                  <CardItem>
                      <Left>
                          <Thumbnail source={{uri: info.sprites.front_default}} />
                          <Body>
                              <Text>{info.name[0].toUpperCase() + info.name.slice(1)}</Text>
                          </Body>
                      </Left>
                      <Right>
                          {info.types.map((item, id) =>
                              <Text key={id} style={{...styles[item.type.name], ...styles.type }}>{item.type.name}</Text>
                          )}
                      </Right>
                  </CardItem>
                </Card>
            )}
            {!isLoaded && (<Text>Loading...</Text>)}
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    alignItems:'center'
    
  },
  card:{
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 5,
    width: 300,
    margin: 10,

  },
  image:{
    width: 50,
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5
  },
  type:{
    padding: 5,
    borderRadius: 10,
    margin:2,
    width: 70,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold'
  },
  bug:{
    backgroundColor: '#a8b820'
  },
  dark:{
    backgroundColor: '#705848'
  },
  dragon:{
   backgroundColor: '#6f81e6'
  },
  electric:{
  backgroundColor: '#f8d030'
  },
  fairy:{
  backgroundColor: '#f8a0e0'
  },
  fighting:{
  backgroundColor: '#903028'
  },
  fire:{
  backgroundColor: '#f05030'
  },
  flying:{
  backgroundColor: '#a890f0'
  },
  ghost:{
  backgroundColor: '#705898'
  },
  grass:{
  backgroundColor: '#78c850'
  },
  ground:{
  backgroundColor: '#e0c068'
  },
  ice:{
  backgroundColor: '#98d8d8'
  },
  normal:{
  backgroundColor: '#a8a878'
  },
  poison:{
  backgroundColor: '#a040a0'
  },
  psychic:{
  backgroundColor: '#f85888'
  },
  rock:{
  backgroundColor: '#b8a038'
  },
  shadow:{
  backgroundColor: '#403246'
  },
  steel:{
  backgroundColor: '#b8b8d0'
  },
  unknown:{
  backgroundColor: '#68a090'
  },
  water:{
  backgroundColor: '#6890f0'
  }
});
