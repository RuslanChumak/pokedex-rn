import React, {useEffect, useState} from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import { View, Text } from 'native-base';
import ElOfChain from './ElOfChain'
export default function Ability({data}) {
    const [info, setInfo] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() =>{
        fetch(data.url)
        .then(res => res.json())
        .then(res =>{
            fetch(res.evolution_chain.url).then(res => res.json()).then(r =>{
                let el = r.chain
                let data = []
                do{
                    data.push(el.species.name)
                    el = el.evolves_to[0]
                }while(el !== undefined)
                setInfo(data)
                setIsLoaded(true)
                
                })
        })
    }, [isLoaded])
  return (
      
    <View>
        <Text style={styles.title}>Evolution Chain</Text>
        <View style={styles.evo}>
        {!isLoaded && (
            <ActivityIndicator />
        )}
        {info.map(item =>
            <ElOfChain key={item} name={item}/>
        )}
        </View>
    </View>
  );
}
const styles = StyleSheet.create({
    title:{
        fontSize: 20,
        fontWeight: '900',
        textAlign:'center',
        margin: 10
    },
    evo:{
        flex:1,
        flexDirection: 'row',
        justifyContent: "space-around"
    }
})
