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
      flexWrap:'wrap',
      paddingTop:10,
      backgroundColor: '#e5e5e5',
    },
    welcome:{
        fontSize: 20,
        textAlign: 'center',
        textAlignVertical: 'center',
        margin: 10,
      },

  }
);

 export default class CompanyList extends Component {

  static navigationOptions = {
  
        tabBarlabel: 'Companies',
        tabBaricon: ({tintColor}) => (
            <Icon 
            name={'business'}
            size={45}
            style={{ color:tintColor}} />
          )
     
          
   
  }
  render() {
    return (
      <View style={styles.container} >
         <Text>
           Companies
         </Text>
 
       </View>
    );
  }
}
