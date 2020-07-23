import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { Form, Picker, Item, Icon, Label, Header, Body, Text } from 'native-base'

export default function SideBar({limit, changeLimit, type, changeType, types}) {

    return (
        <View style={styles.container}>
            <View  style={styles.header}> 
                <Header>
                    <Body>
                        <Text style={styles.title}>Filter</Text>
                    </Body>
                </Header>
            </View>
            <View style={styles.limit}>
                <Text style={styles.limitText}>Items per page: </Text>
                <View style={styles.button}>
                    <Button  disabled={limit === '10'} title='10' onPress={() => changeLimit('10')}/>
                </View>
                <View style={styles.button}>
                    <Button  disabled={limit === '25'} title='25' onPress={() => changeLimit('25')}/>
                </View>
                <View style={styles.button}>
                    <Button  disabled={limit === '50'} title='50' onPress={() => changeLimit('50')}/>
                </View>
            </View>
            <View style={styles.limit}>
            <Text > </Text>
                <Form>
                    <Item>
                        <Label>Filter by type:</Label>
                        <Picker
                            mode="dropdown"
                            iosIcon={<Icon name="arrow-down" />}
                            style={{ width: '50%' }}
                            placeholder="Select type"
                            placeholderStyle={{ color: "#bfc6ea" }}
                            placeholderIconColor="#007aff"
                            selectedValue={type}
                            onValueChange={changeType}
                        >
                            {types.map(item =>
                                <Picker.Item key={item} label={item} value={item} />
                            )}
                            
                        </Picker>
                    </Item>
                </Form>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    backgroundColor: 'white',
    height: '100%',
    justifyContent: 'flex-start'
  },
  header:{
    width: '100%'
  },
  title:{
    fontSize: 19,
    color: 'white'
  },
  text:{
      padding: 5,
      fontSize: 25,
      color: 'black',
      borderBottomWidth: 1,
      width: '100%',
      textAlign: 'center',
      backgroundColor: "blue",
      color: 'white',
      fontWeight: '300'

  },
  limit:{
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      margin: 10,
      width: '100%'
  },
  limitText:{
      padding: 7,
      width: '45%'
  },
  types:{
    width: '100%',
    flex: 1,
    flexDirection: 'row'
  },
  button:{
    width: '15%',
    marginLeft: 5
}
});
