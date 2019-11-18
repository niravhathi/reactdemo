import React, {Component} from 'react';
import {Text, StyleSheet, View, Button, Image} from 'react-native';

class DetailsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Details',
    /*  drawerIcon: ({tintColor}) => (
      <Image
        source={require('./notif-icon.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ), */
  };
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Details</Text>
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

export default DetailsScreen;
