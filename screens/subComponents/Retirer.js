import React, { Component } from 'react';
import {
    View,

    StyleSheet,

} from 'react-native';
import PocheId from './subsubComponents/PocheId';
import Boutton from './subsubComponents/Bouton';

class Retirer extends Component{
  

  render(){
      return (
      <View style={styles.contener}>

        <View  style={styles.subContener}>
        <PocheId value={this.props.value}
                onValueChange={this.props.onValueChange}
                onChangeTextIdentifiant={this.props.onChangeTextIdentifiant} />
        </View>
        
        <View  style={styles.subContener}>
           <Boutton onPressA={this.props.onPressA} onPressV={this.props.onPressV} />
        </View>
     </View>
      ); 
    }
}

export default Retirer;
const styles = StyleSheet.create({
    contener:{

      flex:1,
      flexDirection:'column',
      backgroundColor:'#fffaf0'
    },
    subContener:{
     
      flex:1,
      flexDirection:'row',
      borderColor:'#0f0',
    },
    text:{
      borderColor:'#f00',
     
      color:'#f00',
    },
    input:{
      borderColor:'#00f',
      
      marginRight:30,
    },
  });