import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './home';
import ListData from './listdata';
import DemoApi from './apidemo';

const MainNavigator = createStackNavigator({
    Home: {screen: HomeScreen},
    ListDemo: {screen: ListData},
    APIDemo : {screen: DemoApi},
  }, {
     initialRouteName: 'Home'
  }
  );

const Navigator = createAppContainer(MainNavigator);
export default Navigator;