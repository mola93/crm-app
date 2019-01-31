/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {   Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


const styles = StyleSheet.create(
  {
    container:{
      flex:1,
      width:353,
      flexWrap:'wrap',
      paddingTop:20,
      backgroundColor: '#e5e5e5',
    },
    welcome:{
        fontSize: 20,
        textAlign: 'center',
        textAlignVertical: 'center',
        margin: 10,
      },
      icon: {
          paddingBottom:2
      },
  }
);

 export default class AddPerson extends Component {

  static navigationOptions = {
   
        tabBarlabel: 'Add Person',
        tabBaricon: ({tintColor}) =>  (
            <Icon 
            name={'plus'}
            size={70}
            style={[{ color:tintColor},styles.icon]} />
          )
           
          
      
  }
  render() {
    return (
      <View style={styles.container} >
         <Text>
             Add person
         </Text>
 
       </View>
    );
  }
}
/* kggjgj */