import React from 'react';
import {  StyleSheet,
          View,
          TouchableOpacity,
          Text,

        } from 'react-native';

export default function  Modifier(props) {
    return (
        <View style={styles.modifierContener}>
            <TouchableOpacity
                style={styles.submidButton}
                 onPress={props.onPressAS}
                >
                <Text style= {styles.submidButtonText}> Ajouter une poche de sang </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.submidButton}
                onPress={props.onPressRS}>
             <Text style= {styles.submidButtonText}> Retirer une poche de sang </Text>
        </TouchableOpacity>

        </View>
    );

}
const styles = StyleSheet.create({
    modifierContener:{
      padding:10,
      backgroundColor:'#fffaf0'
    },
    submidButton:{
      backgroundColor:'#00f',
      padding:10,
      margin:1,
      height:40,
      marginLeft:5,
      marginRight:5,
      borderRadius:10,
      
    },
    submidButtonText:{
      color:'white',
      textAlign:'center',
    },
  });