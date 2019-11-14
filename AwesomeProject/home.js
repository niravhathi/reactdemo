import React, {Component} from 'react';
import {StyleSheet, SafeAreaView, View, Text, Button, TouchableOpacity, TextInput} from 'react-native';


export default class HomeScreen extends Component{
    constructor(props){
      super(props);
   
      this.state={
        name: 'Home Screen',
        txtIn: 'PlaceHolder'
      }
   }

   componentDidMount(){

   }
    
   render(){
       return(
          <SafeAreaView style={styles.mainContainer}>
             <TouchableOpacity onLongPress={()=> {this.props.navigation.navigate('ListDemo')}}
             delayLongPress={500}>
            <Text style={{alignSelf: 'center', fontSize: 20, color: 'red'}}>
               {this.state.name}
            </Text>
            </TouchableOpacity> 

            <Button onPress={() => this.buttonClick()}
             title='Change Text'
            />
            
            <TextInput style={{borderColor:'black', borderWidth:1, width: 300,alignSelf:'center', 
            height:30}} onChangeText={() => {}}></TextInput>
            <Button onPress={ ()=> this.props.navigation.navigate('ListDemo')}
             title='Change Text for Input'
            />
          </SafeAreaView>
       );
   }

  
//    componentDidUpdate(){

//    }

//    componentWillReceiveProps(props){

//    }

    buttonClick(){
        this.setState({name: 'Home Screen 1'});
    }
    changeTextInput(val){
        this.setState({txtIn: val});
    }
    buttonAlertClick(val){
        alert(val);
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection:'column',
        justifyContent: 'center',
        alignContent: 'flex-start',
    }
})
