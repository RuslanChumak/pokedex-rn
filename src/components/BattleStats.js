import React from 'react';
import { View } from 'react-native';
import { Left, Right, ListItem, Text } from "native-base";
export default function BattleStats({data}) {


  return (
    <View>
        <ListItem itemDivider>
            <Text>Battle Stats</Text>
        </ListItem>
        {data.stats.map(item =>
            <ListItem key={item.stat.name}>
                <Left>
                    <Text>{item.stat.name.toUpperCase()}</Text>
                </Left>
                <Right>
                    <Text>{item.base_stat}</Text>
                </Right>
            </ListItem> 
        )}
    </View>
  );
}

