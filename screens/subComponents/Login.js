import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,

} from 'react-native';
import { requireNativeViewManager } from '@unimodules/core';

class Login extends Component {

  render() {
    return (
      <View style={styles.contenerLogin}>
          <View style={styles.sectionLogo}>
          <Text></Text>
          </View>
          <View styles={styles.sectionLogin}>
            <View style={{flex:1, flexDirection:'row', justifyContent:'space-between',}}>
              <Image source={require('./image/hopitalCentral.png')} 
              style={ {width:80 , height: 100, marginLeft:50,margin:1}}/>
              <Image source={require('./image/bloodshare3.png')} 
              style={ {width:180 , height: 100, margin:1,}}/>
            </View>
            <Image source={require('./image/avatar.png')} 
            style={ {width:50 , height: 50, alignSelf:'center', margin:10,}}/>
            <View>
            <TextInput 
                style={styles.input}
                onChangeText={(text) => this.props.onChangeTextUser(text)}
                placeholder="Username"
                placeholderTextColor="#0000ff"

            />
            </View>
            <View>
            <TextInput
                style={styles.input}
                autoCapitalize="none"
                secureTextEntry
                onChangeText={(text) => this.props.onChangeTextPassWord(text)}
                placeholder="PassWord"
                placeholderTextColor="#0000ff"
            />
            </View>
            <View>
            <TouchableOpacity
                style={styles.submidButton}
                onPress={this.props.onPressLogin}
            >
                <Text style={styles.submidButtonText}> LOGIN </Text>
            </TouchableOpacity>
            </View>
          </View> 
      </View>
    );
  }
}

export default Login;
Login.navigationOptions = {
    title: 'Login',
  };

const styles = StyleSheet.create({
   contenerLogin:{
       flex:3,
       flexDirection:'column',
       justifyContent:'flex-start',
   },
   sectionLogin:{
    backgroundColor:'#00f',
    justifyContent:'center',
   
   },
   sectionLogo:{
    
   
   },
    modifierContener: {
    padding: 10,
    backgroundColor: '#fffaf0'
  },
  submidButton: {
    backgroundColor: '#0000ff',
    padding: 10,
    marginLeft:60,
    marginRight:60,
    margin:1,
    height: 50,
    borderRadius:10,
  },
  submidButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  input:{
    marginLeft:60,
    marginRight:60,
    height:50,
    borderColor:"#00f",
    borderWidth:1,
    borderRadius:10,
    margin: 1,
    padding:15,
  },
});
