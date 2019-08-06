/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableHighlight
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import RazorpayCheckout from 'react-native-razorpay';
class App extends Component{
  render(){
    return(
      <View>
        <Text>hello</Text>
        <TouchableHighlight onPress={() => {
  var options = {
    description: 'Credits towards consultation',
    image: 'https://i.imgur.com/3g7nmJC.png',
    currency: 'INR',
    key: 'rzp_test_YuZbEEjMBRhDsy',
    amount: '5000',
    external : {
      wallets : ['paytm']
    },
    name: 'foo',
    prefill: {
      email: 'void@razorpay.com',
      contact: '9191919191',
      name: 'Razorpay Software'
    },
    theme: {color: '#F37254'}
  }
  RazorpayCheckout.open(options).then((data) => {
    // handle success
    alert(`Success: ${data.razorpay_payment_id}`);
  }).catch((error) => {
    // handle failure
    alert(`Error: ${error.code} | ${error.description}`);
  });
  RazorpayCheckout.onExternalWalletSelection(data=>{
    alert(data.external_wallet);
  })
}}>
  <Text>Press</Text>
</TouchableHighlight>
      </View>
    )
  }
}

export default App;
