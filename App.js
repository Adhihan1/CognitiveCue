import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Login from './screens/Login';
import Register from './screens/Register'
import Rating from './screens/Rating'

const stackNavigatorOptions = {
    headerShown:false
}
const AppNavigator = createStackNavigator({
    Login:{screen:Login},
    Register:{screen:Register},
    Ratomg:{screen:Rating},
},
{
    defaultNavigationOptions : stackNavigatorOptions
}  
);

export default createAppContainer(AppNavigator);;
/**

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { AppMain } from './navigation';

export default function App() {

  var tempState = "";
  var accounts = []; // will be implemented later
  if (accounts.length == 0) {
    console.log('hi')
  }

  return (
    <SafeAreaView style={styles.container}>
     <AppMain></AppMain>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    lineHeight: 45,
    fontFamily: 'SemiBold',
  }
});



 */