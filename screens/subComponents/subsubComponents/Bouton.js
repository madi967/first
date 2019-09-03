import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';


export default class Bouton extends Component {

  render() {
    return (
        <View style={styles.contenerButton}>

            <TouchableOpacity
                style={styles.submidButton}
                onPress={this.props.onPressA}>

                <Text style={styles.ButtonText}> ANNULER</Text>

            </TouchableOpacity>

            <TouchableOpacity
                style={styles.submidButton}
                onPress={this.props.onPressV}>

                <Text style={styles.ButtonText}> VALIDER </Text>      
            </TouchableOpacity>

        </View>

    );
  }
}


const styles = StyleSheet.create({
   contenerButton:{
    flex:1,

   },
  submidButton: {

    backgroundColor: '#0000ff',
    marginLeft:5,
    marginRight:5,
    margin:1,
    height: 40,
    borderRadius:10,
  },
  ButtonText: {
    color: 'white',
    textAlign: 'center',
    margin:5,
  },
});