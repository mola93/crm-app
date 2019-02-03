/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {   Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, Linking} from 'react-native';
import {connect } from 'react-redux';  
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
import * as actions from './actions';
import {getTheme} from 'react-native-material-kit';
import { MKTextField, MKColor, MKButton} from 'react-native-material-kit';
import DetailView from './DetailView';
import UpdatePerson from './UpdatePerson';



const theme = getTheme();




const styles = StyleSheet.create({
    card: {
      marginTop: 10,
      paddingBottom: 20,
      marginBottom: 20,
      borderColor: 'lightgrey',
      borderWidth: 0.5,
    },
    title1: {
        top: 10,
        left: 80,
        fontSize: 24,
    },
    title2: {
        top: 35,
        left: 82,
        fontSize: 18,
    },
    image: {
        flex: 0,
        height: 100,
        width: 33,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },
    closeIcon: {
        position: 'absolute',
        top: 5,
        left: 295,
        color: 'rgba(233,166,154,0.8)',
        backgroundColor: 'rgba(255,255,255,0)',
    },  
    icon: {
        position: 'absolute',
        top: 15,
        left: 0,
        color: 'white',
        backgroundColor: 'rgba(255,255,255,0)',
    },
    textArea: {
        flexDirection: 'row',
        paddingLeft: 20,
        paddingTop: 10,
        width: 260,
    },
    textIcons: {
        color: '#26a69a',
    },
    actionArea: {
        paddingTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    editIcon: {
        color: '#26a6e4',
    },
    sections: {
        flexDirection:  'row',
        paddingLeft: 10,
        paddingTop: 10,
        width: 100,
    },
    deleteIcon: {
        color: '#e9a69a',
    },
    editDeleteArea: {
      flexDirection:  'row',
      paddingRight: 20,
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: 'rgba(211,211,211, 0.3)',
      marginBottom: 10,
    },
  });
  
 class PeopleDetail extends Component {
 
    renderDetails() {
        if (this.props.toUpdate) {
            return <UpdatePerson />;
        } else {
            return <DetailView />;
        }
    }

  render() {
    return (
    <View>
          {this.renderDetails()}

    </View>
    );
  }
}


// this lifecycle hook makes the data available to the component
const mapStateToProps = state => {

  return { toUpdate: state.toUpdate,

};
}

export default connect(mapStateToProps, actions)(PeopleDetail)