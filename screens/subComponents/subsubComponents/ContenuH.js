import React from 'react';
import {  StyleSheet,
          View,
          Text,
        } from 'react-native';

export default function  Modifier() {
    return /*(
        <View style={ styles.itemFlatist}> 
            <Text>{this.props.historique[0]}</Text>
            <Text>{this.props.historique[1]}</Text>
            <Text>{this.props.historique[2]}</Text>
            <Text>{this.props.historique[3]}</Text>
            <Text>{this.props.historique[4]}</Text>
        </View>
    );*/
}
const styles=StyleSheet.create({
    itemFlatist:{
        flex:1,
        flexDirection:'row',
        padding:1,
        margin: 1,
        textAlign:'center',
        backgroundColor:'#cd0000'    
    },

});