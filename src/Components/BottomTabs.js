import React, { Component } from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from '../Pages/Home'
import Register from '../Pages/Register'
import Icon from 'react-native-vector-icons/Octicons'
import IconFeather from 'react-native-vector-icons/Feather'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'


const BottomTabs = createBottomTabNavigator()
class BottomStack extends Component{
  render(){
    return(
      <BottomTabs.Navigator>
            <BottomTabs.Screen name='Home' component={Home} options={{
              tabBarLabel: 'Home',
              tabBarIcon:({color, size}) => (
                <Icon name='home' color={color} size={size} />
              )
            }} />
            <BottomTabs.Screen name='History' component={Register} options={{
              tabBarLabel: 'History',
              tabBarIcon:({color, size}) => (
                <IconFeather name= 'activity' color={color} size = {size} />
              )
            }} />
            <BottomTabs.Screen name='Live Chat' component={Home} options={{
              tabBarIcon:({color, size}) => (
                <SimpleLineIcons name='bubbles' color={color} size = { size } />
              )
            }} />
            <BottomTabs.Screen name='Profile' component={Home} options={{
              tabBarIcon:({color, size}) => (
                <IconFeather name='user' color={color} size= {size} />
              )
            }} />
          </BottomTabs.Navigator>
    )
  }
}


export default BottomStack