import React, {Component} from 'react';
import {StyleSheet, FlatList, SafeAreaView, View, Text, SectionList, Button} from 'react-native';


export default class ListData extends Component {
    constructor (props){
        super(props);
    }
    componentDidMount(){

    }
    render() {
        return(
            <SafeAreaView style={styleSheet.mainContainer}>
             <View style={styleSheet.container}>
        {/* <FlatList
          data={[
            {key: 'Devin'},
            {key: 'Dan'},
            {key: 'Dominic'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}
          renderItem={({item}) => <Text style={styleSheet.item}>{item.key}</Text>}
        /> */}
        <Button title="Api Demo" onPress={() => {this.props.navigation.navigate('APIDemo')}}/>
        <SectionList
          sections={[
            {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
            {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
          ]}
          renderItem={({item}) => <Text style={styleSheet.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styleSheet.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>   
      </SafeAreaView>
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
    },
    container: {
        flex: 1,
        paddingTop: 22
       },
    item: {
         padding: 10,
         fontSize: 18,
         height: 44,
       },
       sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
      },

});