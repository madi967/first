import React,{Component} from 'react';
import {  StyleSheet,
          View,
          Text,
          FlatList,
          TouchableOpacity,
       

        } from 'react-native';

class Historique extends Component {
    constructor(props){
        super(props);
        this.state={
            voirHistorique:false,
        };
    }
    render(){
        if(this.state.voirHistorique){
            if(this.props.historique.length === 0){
                return (
                    <View style={styles.historiqueContainer}>
        
                        <TouchableOpacity
                            style={styles.submidButton}
                              >
                            <Text style={styles.submidButtonText}>L'historique des actions est vide</Text>
                        </TouchableOpacity>
                       
                    </View >   
                );
            }else{
                return (
                    <View style={styles.historiqueContainer}>
        
                        <TouchableOpacity
                            style={styles.submidButton}
                            onPress={()=> this.setState({ voirHistorique:false})}  >
                            <Text style={styles.submidButtonText}>Réduire historique des actions</Text>
                        </TouchableOpacity>
                        <FlatList
                            style={styles.historiqueFlatList}
                            data={[["Date & Heure","Action","groupe","Code","Donneur régulier"]]}
                            renderItem={({item}) => (
                                <View style={styles.itemFlatist}>
                                  <Text style={styles.item}>{item[0]}</Text>
                                  <Text style={styles.item}>{item[1]}</Text>
                                  <Text style={styles.item}>{item[2]}</Text>
                                  <Text style={styles.item}>{item[3]}</Text>
                                  <Text style={styles.item}>{item[4]}</Text>
                                </View >
                                  )}
                                  keyExtractor={(item, index) => (index=item[0]+item[1])}
                        />
                         <FlatList
                            style={styles.historiqueFlatListC}
                            data={this.props.historique}
                            renderItem={({item}) => (
                                <View style={styles.itemFlatist}>
                                  <Text style={styles.itemH}>{item[0]}</Text>
                                  <Text style={styles.itemH}>{item[1]}</Text>
                                  <Text style={styles.itemH}>{item[2]}</Text>
                                  <Text style={styles.itemH}>{item[3]}</Text>
                                  <Text style={styles.itemH}>{item[4]}</Text>
      
                                </View >
                            )}
                            keyExtractor={(item, index) => (index=item[0]+item[1])}
                        />
                    </View>
                );
            }
        }else{
            return(
            <TouchableOpacity
                style={styles.submidButton}
                onPress={()=> this.setState({ voirHistorique:true})}  >
                <Text style={styles.submidButtonText}>Voir historique des actions</Text>
              </TouchableOpacity>);
        }
        
        
    }
}

export default Historique

const styles=StyleSheet.create({
    historiqueContainer:{
        padding:10,
        backgroundColor:'#fffaf0',
    },
    historiqueText:{
        backgroundColor:'#f00',
        padding:10,
        margin: 1,
        height:40,
        textAlign:'center',
        color:'white',
    },
    historiqueFlatList:{
        backgroundColor:'#800',
        padding:10,
        margin: 1,
        borderBottomColor:'#fff',
        borderBottomWidth:2
    },
    historiqueFlatListC:{
        
        padding:10,
        margin: 0,
        borderBottomColor:'#fff',
        borderBottomWidth:2
    },
    itemFlatist:{
        flex:1,
        flexDirection:'row',
     
        textAlign:'center',
        

         
    },
    item:{
        backgroundColor:'#800',
        flex:1,
        padding:1,
        margin: 1,
        height:40,
        color:'white',
      },
      itemH:{
        borderBottomColor:"#00f",
        borderBottomWidth:2,
        flex:1,
        padding:1,
        
        height:55,

      },
      submidButton: {

        backgroundColor: '#f00',
        marginLeft:5,
        marginRight:5,
        margin:1,
        height: 40,
        borderRadius:10,
        alignContent:'center',
        justifyContent:'center',
      },
      submidButtonText: {
        color: 'white',
        textAlign: 'center',
        margin:5,
      },
      text:{
          color:'#f00',
         
          textAlign:'center',
          margin: 5,
      }

});