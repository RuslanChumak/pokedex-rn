import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ListItem, Text } from "native-base";
import Ability from './Ability'
export default function AbilitiesList({data}) {

  return (
    <View>
        <Text style={styles.title}>Abilities</Text>
        {data.abilities.map((item, id) =>
        <View key={id}>
            <ListItem itemDivider>
                <Text>{item.ability.name}</Text>
            </ListItem>
            <ListItem>
                <Ability data={item.ability}/>
            </ListItem>
        </View>
        )}
        
    </View>
  );
}

const styles = StyleSheet.create({
    title:{
        fontSize: 20,
        fontWeight: '900',
        textAlign:'center',
        margin: 10
    }
})
