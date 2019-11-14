import React, {Component} from 'react';
import {StyleSheet, SafeAreaView, FlatList, ActivityIndicator, Text, View } from 'react-native';


export default class DemoApi extends Component {
    constructor(props){
        super(props)
        this.state ={ isLoading: true}
        this.callWebServiceAPI();
    }
    
    render(){
        if(this.state.isLoading){
            console.log("loading");
            return(
              <View style={{flex: 1, padding: 20}}>
                <ActivityIndicator/>
              </View>
            )
          }
          console.log("render");
          return(
             
            <SafeAreaView style={{flex: 1, paddingTop:20}}>
            <View >
              <FlatList
                data={this.state.dataSource}
                renderItem={({item}) => <Text>{item.title}, {item.releaseYear}</Text>}
                //
                keyExtractor={({id}, index) => id}
              />
            </View>
            </SafeAreaView>
          );
    }
    callWebServiceAPI(){
        fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson.movies);
        this.setState({
          isLoading: false,
          dataSource: responseJson.movies,
        }, function () {

        });

      })
      .catch((error) => {
        console.error(error);
      });
    }
}

const styleSheet = StyleSheet.create({
    mainContainer:{

    }
})