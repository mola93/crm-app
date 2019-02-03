/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import { MKTextField, MKColor, MKButton} from 'react-native-material-kit';
import { connect } from 'react-redux';
import * as actions from './actions';

const styles = StyleSheet.create({
  form: {
    flex: 1,
    paddingTop: 50,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'space-between',
  },
  fieldStyles: {
    height: 40,
    color: MKColor.Orange,
  },
  addButton:{
    marginTop: 20,
  },
});

const AddButton = MKButton.coloredButton()
  .withText('ADD')
  .build();

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
    onAddPress() {
      const { first_name, last_name, phone, email, company, project, notes } = this.props;

      this.props.createNewContact({ first_name, last_name, phone, email, company, project, notes });

      this.props.navigation.navigate('PeopleList');
    }
  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.form}>
          <Text>Add a new contact</Text>
          <MKTextField 
            textInputStyle={styles.fieldStyles}
            placeholder={'First name...'}
            tintColor={MKColor.Teal}
            value={this.props.first_name}
            onChangeText={value => this.props.formUpdate({ prop: 'first_name', value})}
          />
          <MKTextField 
            textInputStyle={styles.fieldStyles}
            placeholder={'Last name...'}
            tintColor={MKColor.Teal}
            value={this.props.last_name}
            onChangeText={value => this.props.formUpdate({ prop: 'last_name', value})}
          />
          <MKTextField 
            textInputStyle={styles.fieldStyles}
            placeholder={'Phone number...'}
            tintColor={MKColor.Teal}
            value={this.props.phone}
            onChangeText={value => this.props.formUpdate({ prop: 'phone', value})}
          />
          <MKTextField 
            textInputStyle={styles.fieldStyles}
            placeholder={'Email...'}
            tintColor={MKColor.Teal}
            value={this.props.email}
            onChangeText={value => this.props.formUpdate({ prop: 'email', value})}
          />
          <MKTextField 
            textInputStyle={styles.fieldStyles}
            placeholder={'Company...'}
            tintColor={MKColor.Teal}
            value={this.props.company}
            onChangeText={value => this.props.formUpdate({ prop: 'company', value})}
          />
          <MKTextField 
            textInputStyle={styles.fieldStyles}
            placeholder={'Project...'}
            tintColor={MKColor.Teal}
            value={this.props.project}
            onChangeText={value => this.props.formUpdate({ prop: 'project', value})}
          />
          <MKTextField 
            textInputStyle={styles.fieldStyles}
            placeholder={'Notes...'}
            tintColor={MKColor.Teal}
            value={this.props.notes}
            onChangeText={value => this.props.formUpdate({ prop: 'notes', value})}
          />
          <View style={styles.addButton}>
            <AddButton onPress={this.onAddPress.bind(this)}/>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  const { first_name, last_name, phone, email, company, project, notes } = state;
  return { first_name, last_name, phone, email, company, project, notes };

};

export default connect(mapStateToProps, actions)(AddPerson);