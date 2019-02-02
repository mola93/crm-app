/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import {MKTextField, MKColor, MKButton } from  'react-native-material-kit'


const styles = StyleSheet.create({
  form:{
    flex:1,
    paddingTop: 50,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight:20,
    justifyContent: 'space-between',
  },

   fieldStyles: {
      height: 40,
      color: MKColor.Orange
   },
   addButton: {
     marginTop: 20,
   }
});

const AddButton = MKButton.coloredButton().withText('ADD').build();

class AddPerson extends Component {
  static navigationOptions = {  

    

    tabBarLabel: 'Add person',
    tabBarIcon: ({tintColor}) => (
      <Icon 
      name={'plus'}
      size={50}
      style={{ color:tintColor}} />
    )

    

}
  render() {
    return (
     <ScrollView showsVerticalScrollIndicator={false}>
       <View style={styles.form}>
       <Text>Add a new contact</Text>
       <MKTextField
          textInputStyle={styles.fieldStyles}
          placeholder={'first name...'} 
          tintColor={MKColor.Teal}
       />

<MKTextField
          textInputStyle={styles.fieldStyles}
          placeholder={'last name...'} 
          tintColor={MKColor.Teal}
       />

<MKTextField
          textInputStyle={styles.fieldStyles}
          placeholder={'Phone number...'} 
          tintColor={MKColor.Teal}
       />

<MKTextField
          textInputStyle={styles.fieldStyles}
          placeholder={'email ...'} 
          tintColor={MKColor.Teal}
       />

<MKTextField
          textInputStyle={styles.fieldStyles}
          placeholder={'company ...'} 
          tintColor={MKColor.Teal}
       />
        <MKTextField
          textInputStyle={styles.fieldStyles}
          placeholder={'project ...'} 
          tintColor={MKColor.Teal}
       />

<MKTextField
          textInputStyle={styles.fieldStyles}
          placeholder={'notes ...'} 
          tintColor={MKColor.Teal}
       />
       <View style={styles.addButton}>
          <AddButton />
       </View>
       </View>
     </ScrollView>
    );
  }
}

export default AddPerson;