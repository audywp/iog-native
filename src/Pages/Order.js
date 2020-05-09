import React, { Component } from 'react'

import {createStackNavigator} from '@react-navigation/stack'
import BusStack from '../Components/BusStack'
const orderStack = createStackNavigator()

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      
     };
    
  }
  render() {
    return (
      <>
        <orderStack.Navigator>
          <orderStack.Screen name='Bus' component={BusStack} options={{headerShown: false}} />
        </orderStack.Navigator>
      </>
    );
  }
}

export default Order;