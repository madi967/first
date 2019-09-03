import React from 'react';
import {
        View,
        SectionList,
        Text,
        StyleSheet,
        } from 'react-native';

export default function PocheSang(props){
    return (
        <View style={styles.pochesangContener}>

          <Text style={styles.poschesangText}>Poche de sang disponible</Text>
          <SectionList
            sections={[
              {title: 'Rhésus +', data: props.tabSang.slice(0,4)},
              {title: 'Rhésus -', data: props.tabSang.slice(4,8)},
            ]}
            renderItem={({item}) => (
              <View style={styles.itemFlatist}>
                <Text style={styles.item}>{item[0]}</Text>
                <Text style={styles.item}>{item[1]}</Text>
              </View >
                )}
            renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
            keyExtractor={(item, index) => index}
          />

          <Text style={styles.donneurText}> Nombre de donneur regulier du jour: {props.nbrDonneur} </Text>
        </View>
    );
} 

const styles =StyleSheet.create({
    pochesangContener:{
        padding:10,
        backgroundColor:'#fffaf0',
    },
    poschesangText:{
        backgroundColor:'#f00',
        padding:10,
        margin: 1,
        height:40,
        color:'white',
        textAlign:'center',
    },
    item:{
      borderColor:'#00f',
      flex:1,
      padding:10,
     
      borderBottomColor:'#00f',
      borderBottomWidth:2,
      height:40,
    },
    sectionHeader:{
        backgroundColor:'#800',
        padding:10,
        margin: 1,
        
        height:40,
        color:'white',
        textAlign:'center',
    },
    donneurText:{
        backgroundColor:'#00f',
        padding:10,
        margin: 1,
        height:40,
        color:'white',
        textAlign:'center',
    },
    itemFlatist:{
      flex:1,
      flexDirection:'row',
      flexWrap:'wrap',
      padding:1,
      margin: 1,
      textAlign:'center',
       
  },

});