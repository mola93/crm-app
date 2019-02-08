/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Header} from 'react-native-elements';
 import firebase from 'firebase';
import Login from './src/Login';
import Loader from './src/Loader';
 import {Provider} from 'react-redux';
 import { createStore,compose, applyMiddleware} from 'redux';
 import reducers from './src/reducers/PeopleReducer';
import MainNavigator from './src/Navigation';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';


console.disableYellowBox = true;

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancer(applyMiddleware(thunk)),
);





export default class App extends Component {

  state = {loggedIn: null,
           posts: null     
  };

  componentDidMount(){
    firebase.initializeApp(
      {
        apiKey: "AIzaSyAE9XIFxAON1UrkQx4Miw_3cXy6fSm7CtQ",
        authDomain: "crmapp-d2efb.firebaseapp.com",
        databaseURL: "https://crmapp-d2efb.firebaseio.com",
        projectId: "crmapp-d2efb",
        storageBucket: "crmapp-d2efb.appspot.com",
        messagingSenderId: "766221982242"
      }
    );  firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          loggedIn: true
        });

      } else {
        this.setState({
          loggedIn:false
        })
      }
    });
  }
  renderInitialView(){
    switch (this.state.loggedIn) {
      case true:
      return <MainNavigator />
      case false:
      return <Login/>
     default:
     return <Loader size="large" />;

    }
  }
  render() {
    return (
      <Provider store={store}>

<Header
  centerComponent={{ text: 'CRM-APP', style: { color: '#fff' } }}
/>
         {this.renderInitialView()}
         
      </Provider>
      
    );
  }
}

