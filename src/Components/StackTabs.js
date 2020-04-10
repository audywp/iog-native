import React, { Component } from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Login from '../Pages/Auth/Login'
import Register from '../Pages/Auth/Register'
import BottomStack from './BottomTabs';
const stackTabs= createStackNavigator()
class StackTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <stackTabs.Navigator>
        <stackTabs.Screen name='Login' component={Login} />
        <stackTabs.Screen name='Home' component={BottomStack} options={{
          headerShown: false
        }} />
        <stackTabs.Screen name='Register' component={Register} />
      </stackTabs.Navigator>
    );
  }
}

export default StackTabs;