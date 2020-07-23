import React from 'react';
import { View } from 'react-native';
import { Left, Right, ListItem, Text } from "native-base";
export default function BaseStats({data}) {


  return (
    <View>
        <ListItem itemDivider>
            <Text>Base Stats</Text>
        </ListItem>  
        <ListItem>
            <Left>
                <Text>Base Experience</Text>
            </Left>
            <Right>
                <Text>{data.base_experience}</Text>
            </Right>
        </ListItem>
        <ListItem>
            <Left>
                <Text>Height</Text>
            </Left>
            <Right>
                <Text>{data.height}</Text>
            </Right>
        </ListItem>
        <ListItem>
            <Left>
                <Text>Weight</Text>
            </Left>
            <Right>
                <Text>{data.weight}</Text>
            </Right>
        </ListItem>
    </View>
  );
}

