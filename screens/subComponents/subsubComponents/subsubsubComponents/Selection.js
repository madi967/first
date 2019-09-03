import React, { Component } from 'react';
import {
          Picker,
          StyleSheet,
       } from 'react-native'

class Selection extends Component{

  render(){
    return (
        <Picker
         style={styles.picker}
          selectedValue={this.props.value}
          onValueChange={(itemValue, itemPosition) => this.props.onValueChange(itemValue)} >
            <Picker.Item label="A +" value="A +" />
            <Picker.Item label="B +" value="B +" />
            <Picker.Item label="AB+" value="AB+" />
            <Picker.Item label="O +" value="O +" />
            <Picker.Item label="A -" value="A -" />
            <Picker.Item label="B -" value="B -" />
            <Picker.Item label="AB-" value="AB-" />
            <Picker.Item label="O -" value="O -" />
        </Picker>
    );
  }
}

export default Selection;

const styles=StyleSheet.create({
  picker:{
     height:40,
    width:95,
  },

});
