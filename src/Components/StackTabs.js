import React, { Component } from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Home from '../Pages/Home';

const stackTabs= createStackNavigator()
class StackTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <stackTabs.Navigator>
        <stackTabs.Screen name='IOG' component={Home} />
      </stackTabs.Navigator>
    );
  }
}

export default StackTabs;