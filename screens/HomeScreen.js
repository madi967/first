import React, { Component } from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import Modifier from './subComponents/Modifier';
import PocheSang from './subComponents/PocheSang';
import Historique from './subComponents/Historique';
import MiseAJour from './subComponents/MiseAJour';
import Login from './subComponents/Login';
import Retirer from './subComponents/Retirer';

export default class HomeScreen extends Component {
  constructor(props){
    super(props);
      this.state={
        donneur:"Donneur de remplacement",
        regulier:false,
        login:false,
        user:"",
        passWord:"",
        nom:"",
        identifiant:"",
        value :"A +",
        acceuil:true,
        nbrDonneur : 0,
        modifier:"",
        historique:[],
        tabSang: [
          ["A +",0],
          ["B +",0],
          ["AB+",0],
          ["O +",0],
          ["A -",0],
          ["B -",0],
          ["AB-",0],
          ["O -",0]
        ]
      };

      this.onChangeTextNom=this.onChangeTextNom.bind(this);//modifier le nom et prenom du donneur
      
      this.onChangeTextIdentifiant=this.onChangeTextIdentifiant.bind(this);//modifier l'identifiant de la poche de sang

      this.onPressA=this.onPressA.bind(this);//bouton Annuler
      this.onPressV=this.onPressV.bind(this);//bouton Valider
      this.onPressD=this.onPressD.bind(this);//bouton Valider

      this.onValueChangeSwitch=this.onValueChangeSwitch.bind(this);//gestion du donneur

      this.onValueChange=this.onValueChange.bind(this);//modifier la selection du groupe sanguain

      this.onPressAS=this.onPressAS.bind(this);// bouton ajouter sang
      this.onPressRS=this.onPressRS.bind(this);//bouton retirer sang

      this.onPressLogin=this.onPressLogin.bind(this);
      this.onChangeTextPassWord=this.onChangeTextPassWord.bind(this);
      this.onChangeTextUser=this.onChangeTextUser.bind(this);

  }

  
  onPressAS(){
    this.setState(state => ({
      acceuil:!state.acceuil,
    }))
    this.setState({modifier:"Ajouter une poche de sang"});
  }

  onPressRS(){
    var flag=false;
    for(let i=0;i<8;i++){
      if(this.state.tabSang[i][1]  > 0 ){
        flag=true;
      }
    }
    if(flag){
      this.setState(state => ({
        acceuil:!state.acceuil,
      }))
      this.setState({modifier:"Retirer une poche de sang"});
    }else{
      alert("Le stock est vide");
    }
    
  }

  onPressAD(){
    this.setState(state => ({
      acceuil:!state.acceuil,
    }))
    this.setState({modifier:"Ajouter un donneur"});
  }
//****************************modifications des states ****************************************** */

onValueChangeSwitch(){
  if(this.state.donneur==="Donneur régulier"){
   this.setState({
     donneur:"Donneur de remplacement",
     regulier:false,
     });
  }else{
    this.setState({
      donneur:"Donneur régulier",
      regulier:true,
    });

  }
}
 
onPressA(){//pour annuler l'action en cours
this.setState(state => ({
  acceuil:!state.acceuil,
}));
}

onPressV(){
    const history=["","","","",""];
   
    for(let i=0;i<8;i++ ){
      if(this.state.tabSang[i][0] === this.state.value){
        if(this.state.modifier === "Ajouter une poche de sang"){
          if(this.state.identifiant.length > 0){
            if(this.state.regulier){
              if(this.state.nom.length > 0){
                this.state.tabSang[i][1]=this.state.tabSang[i][1]+1;
                history[0]= Date().slice(0,24);
                history[1]= "Ajout";
                history[2]=this.state.value;
                history[3]=this.state.identifiant;
                history[4]="Oui";

                this.state.historique.unshift(history);
                this.setState(state => ({
                  nbrDonneur:state.nbrDonneur+1,
                  acceuil:!state.acceuil,
                  
                }));
                //ici: se conecter a une bd pour une mise à jour

                //initialisation des variables
                this.setState({
                  donneur:"Donneur de remplacement",
                  regulier:false,
                  nom:"",
                  value:"A +",
                });
              }else{
                alert("Veillez remplir le Nom et prénom du donneur.");
              }

            }else{
              this.state.tabSang[i][1]=this.state.tabSang[i][1]+1;
              history[0]= Date().slice(0,24);
              history[1]= "Ajout";
              history[2]=this.state.value;
              history[3]=this.state.identifiant;
              history[4]="Non";

              this.state.historique.unshift(history);

              this.setState(state => ({
                acceuil:!state.acceuil,
              }));

              //ici: se conecter a une bd pour une mise à jour
              
              //initialisation des variables
              this.setState({
                donneur:"Donneur de remplacement",
                regulier:false,
                identifiant:"",
                nom:"",
                value:"A +",
              });
            }
            
          }else{
            alert("Veillez remplir le code de la poche de sang.");
          }

        }else {
          if( this.state.tabSang[i][1] > 0 ){
            if(this.state.identifiant.length > 0){
              //à completer avec la BD: verifier si le code existe dans la BD
              this.state.tabSang[i][1]=this.state.tabSang[i][1]-1;

              history[0]= Date().slice(0,24);
              history[1]= "Retrait"
              history[2]=this.state.value;
              history[3]=this.state.identifiant;
              history[4]=" ";  


              this.setState(state => ({
                acceuil:!state.acceuil,
              }));

              this.state.historique.unshift(history);
              //ici: se conecter a une bd pour une mise à jour
              
              //initialisation des variables
              this.setState({
                donneur:"Donneur de remplacement",
                regulier:false,
                nom:"",
                value:"A +",
                identifiant:"",
              });

            }else{
              alert("Veiller renseigner le code de la poche à retirer");
            }
          }else{
            alert("Il n'a plus de poche de sang de ce groupe. Veillez selectionner un autre groupe sanguin ou Annuler pour aller à la page précédente");
          }
        }
      }
    }
  }

  onPressD(){
    this.setState(state => ({
      acceuil:!state.acceuil,
      nbrDonneur : ( state.nbrDonneur+1)
    }));
  }

  onValueChange(inValue){
      this.setState({
        value: inValue    
     });
     
  }

  onChangeTextNom(inText){
    this.setState({
      nom: inText
    });
  }

  onChangeTextIdentifiant(inText){
    this.setState({
      identifiant: inText
    });
  }

  onChangeTextUser(inText){
    this.setState({
      user: inText
    });
  }

  onChangeTextPassWord(inText){
    this.setState({
      passWord: inText
    });
  }

  onPressLogin(){
    if((this.state.user==="admin" && this.state.passWord==="admin") ||
     (this.state.user==="user" && this.state.passWord==="user")){
      this.setState(state => ({
        login:true,

      }));
    }
  
  }
  onChange(){
    
  }
  
  render(){
    if(this.state.login && this.state.user ==="admin"){
      if(this.state.acceuil){
        return(
  
          <View style={styles.container}>
            <ScrollView style={styles.container}
            contentContainerStyle={styles.contentContainer} >
            <View style={{flex:1, flexDirection:'row', justifyContent:'space-between',}}>
              <Image source={require('./subComponents/image/hopitalCentral.png')} 
              style={ {width:80 , height: 100, marginLeft:50,margin:1}}/>
              <Image source={require('./subComponents/image/bloodshare3.png')} 
              style={ {width:180 , height: 100, margin:1,}}/>
        </View>
              <TouchableOpacity
                style={styles.submidButton}
                onPress={()=> this.setState({ login:false,user:""})}  >
                <Text style={styles.submidButtonText}>Déconnexion</Text>
              </TouchableOpacity>
  
              < Modifier onPressAS={this.onPressAS} onPressRS={this.onPressRS}
                onPressAD={this.onPressAD}/>
  
              <PocheSang tabSang={this.state.tabSang} nbrDonneur={this.state.nbrDonneur}/>
              
              <Historique historique={this.state.historique}/>
  
            </ScrollView>
          </View>);
      }else {
        if(this.state.modifier === "Ajouter une poche de sang"){
          return(
            <View style={styles.container}> 
              <ScrollView style={styles.container}>
                <MiseAJour nom={this.state.nom} prenom={this.state.prenom} 
                  modifier={this.state.modifier} value={this.state.value}

                  donneur={this.state.donneur}
                  regulier={this.state.regulier}

                  onPressA={this.onPressA}
                  onPressV={this.onPressV}

                  onChange={this.onChange}
                  onValueChangeSwitch={this.onValueChangeSwitch}

                  onChangeTextNom={this.onChangeTextNom}
                  onChangeTextIdentifiant={this.onChangeTextIdentifiant}

                  onValueChange={this.onValueChange} />
            </ScrollView >
            </View>
          );
        }else {
          return ( 
          <View style={styles.container}>
            <ScrollView style={styles.container}>
              <Retirer 
                modifier={this.state.modifier} value={this.state.value}

                onPressA={this.onPressA}
                onPressV={this.onPressV}

                onChangeTextIdentifiant={this.onChangeTextIdentifiant}

                onValueChange={this.onValueChange} /> 
            </ScrollView>
          </View>);
        }
      }
    }else if(this.state.login && this.state.user==="user"){
      return(
  
        <View style={styles.container}>
          <ScrollView style={styles.container}
          contentContainerStyle={styles.contentContainer} >
            <View style={{flex:1, flexDirection:'row', justifyContent:'space-between',}}>
              <Image source={require('./subComponents/image/hopitalCentral.png')} 
              style={ {width:80 , height: 100, marginLeft:50,margin:1}}/>
              <Image source={require('./subComponents/image/bloodshare3.png')} 
              style={ {width:180 , height: 100, margin:1,}}/>
            </View>
            <TouchableOpacity
                style={styles.submidButton}
                onPress={()=> this.setState({ login:false,user:""})}  >
                <Text style={styles.submidButtonText}>Déconnexion</Text>
              </TouchableOpacity>

            <PocheSang tabSang={this.state.tabSang} nbrDonneur={this.state.nbrDonneur}/>
            
            <Historique historique={this.state.historique}/>

          </ScrollView>
        </View>);
    }else{
      return (
        
        <View style={styles.container}>
          <ScrollView style={styles.container}>
          <Login 
            onChangeTextUser={this.onChangeTextUser}
            onChangeTextPassWord={this.onChangeTextPassWord}
            onPressLogin={this.onPressLogin}
          />
          </ScrollView>
        </View>
      );
    }
    
  }
}



HomeScreen.navigationOptions = {
  header: null,
};

HomeScreen.navigationOptions = {
  title: 'Hopital Central de Yaoundé',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'right',
  },
  contentContainer: {
    paddingTop: 10,
    paddingBottom:10,
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  submidButtonText:{
    color:'#00f',
  },
});
