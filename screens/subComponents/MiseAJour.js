import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Switch,

} from 'react-native';
import PocheId from './subsubComponents/PocheId';
import Boutton from './subsubComponents/Bouton';

class MiseAJour extends Component{
    

  render(){
    if(this.props.donneur==="Donneur régulier"){
      return (
        <View style={styles.contener}>
          <View  style={styles.subContener}>
            <PocheId value={this.props.value}
                  onValueChange={this.props.onValueChange}
                  onChangeTextIdentifiant={this.props.onChangeTextIdentifiant} />
          </View>
          <View  style={styles.subContener}>

            <Text styles={styles.text}>{this.props.donneur} </Text>
            <Switch
              label={this.props.donneur}
              onValueChange={this.props.onValueChangeSwitch}
              value={this.props.regulier}
              style={styles.switch}/>

          </View>
          
          <View style={styles.subContener}>

            {/*<Text styles={styles.text}>Nom et Prenom :</Text>*/}
            <TextInput 
              placeholder="Nom et Prénom du Donneur"
              placeholderTextColor="#0000ff"
              style={styles.input}
              onChangeText={(text) => this.props.onChangeTextNom(text)}/>

          </View>
          <View style={styles.subContener}>
             <Boutton onPressA={this.props.onPressA} onPressV={this.props.onPressV} />
          </View>
        </View>
      );  
    }else{
      return (
      <View style={styles.contener}>

        <View  style={styles.subContener}>

          <PocheId value={this.props.value}
                onValueChange={this.props.onValueChange}
                onChangeTextIdentifiant={this.props.onChangeTextIdentifiant} />
        </View>
        
        <View  style={styles.subContener}>

          <Text styles={styles.text}>{this.props.donneur} </Text>
          <Switch
            label={this.props.donneur}
            onValueChange={this.props.onValueChangeSwitch}
            value={this.props.regulier}
            style={styles.switch}/>

        </View>
        <View  style={styles.subContener}>
           <Boutton onPressA={this.props.onPressA} onPressV={this.props.onPressV} />
        </View>
     </View>
      ); 
    }
    
  }
}

export default MiseAJour;
const styles = StyleSheet.create({
    contener:{
      flex:1,
      flexDirection:'column',
      alignItems:'center',
      
      
      backgroundColor:'#fffaf0',
    },
    subContener:{
     flex:1,
     flexDirection:'row',
     alignItems:'center',
     justifyContent:'space-between',
     margin:10,
         
    },
    text:{ 
       
    },
    input:{
      flex:4,
      marginLeft:10,
      marginRight:10,
      height:50,
      borderColor:"#00f",
      borderWidth:1,
      borderRadius:10,
      margin: 1,
      padding:10,
    
    },
    switch:{
       
    },
  });