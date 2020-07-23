import React, {useEffect, useState} from 'react';

import { View, Text } from 'native-base';
export default function Ability({data}) {
    const [info, setInfo] = useState({})
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() =>{
        fetch(data.url)
        .then(res => res.json())
        .then(res =>{
            setInfo(res.effect_entries.filter(item => item.language.name == 'en'))
            setIsLoaded(true)
        })
    }, [isLoaded])
  return (
      
      <View>
          <Text>{isLoaded && info[0].effect}</Text>
      </View>
  );
}

