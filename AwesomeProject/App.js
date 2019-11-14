import React, {Component} from 'react';
import {StyleSheet, FlatList, SafeAreaView} from 'react-native';
import Navigation from './navigator';

export default class App extends Component {
    constructor (props){
        super(props);
    }
    componentDidMount(){

    }
    render() {
        return(
            <Navigation/>
        )
    }
    componentDidUpdate() {

    }
    componentWillReceiveProps(props){

    }
} 

const styleSheet = StyleSheet.create({
    mainContainer:{
        flex: 1,
        alignContent:'center',
        justifyContent:'center'
    }

});