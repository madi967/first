import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,

} from 'react-native';
import Selection from './subsubsubComponents/Selection';

export default class PocheId extends Component{

  render(){
      return (
        <View style={styles.contener}>
            <View style={styles.subContener}>
              
                <Text style={styles.text} >Groupe Sanguin :</Text>
              
                <Selection
                  value={this.props.value}
                  onValueChange={this.props.onValueChange}/>

            </View>

            <View style={styles.subContener}>
              
                {/*<Text  style={styles.text} >Identifiant :</Text>*/}

                <TextInput 
                  placeholder="Code de la poche de sang"
                  placeholderTextColor="#0000ff"
                  style={styles.input}
                  onChangeText={(text) => this.props.onChangeTextIdentifiant(text)}/>

            </View>
        </View>
    );    
  }
}


const styles = StyleSheet.create({
    contener:{

      flex:1,
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'space-around',
      backgroundColor:'#fffaf0'
    },
    subContener:{
      flex:1,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'flex-start',
      margin:1,
      
    
    },
    text:{
      flex:1,
      color:'#000',
      margin:10, 
      
    },
    input:{
      
      flex:2.5,
      marginLeft:5,
      marginRight:10,
      height:50,
      borderColor:"#00f",
      borderWidth:1,
      borderRadius:10,
      margin: 1,
      padding:5,
    
    }
  });