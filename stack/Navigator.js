import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailScreen';

/* const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: null,
      },
    },

    Details: {
      screen: DetailsScreen,
    },
  },
  {
    //initialRouteName: Home,
  },
); */
const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null,
    },
  },
  Details: {
    screen: DetailsScreen,
  },
});

export default createAppContainer(MyDrawerNavigator);
