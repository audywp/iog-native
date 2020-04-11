import React, { Component } from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Login from '../Pages/Auth/Login'
import Register from '../Pages/Auth/Register'
import BottomStack from './BottomTabs';
import {setLogin} from '../Redux/Actions/Auth/Login'
import {connect} from 'react-redux'


const stackTabs= createStackNavigator()
class StackTabs extends Component {

  
  constructor(props) {
    super(props);
    this.state = {  };
  }

  componentDidMount(){
    console.log(this.props.data.isLogged)
  }
  render() {
    return (
      <>
      {this.props.data && this.props.data.isLogged === false ?
      <stackTabs.Navigator>
        <stackTabs.Screen name='Login' component={Login} />
        <stackTabs.Screen name='Register' component={Register} />
      </stackTabs.Navigator> : 
      <stackTabs.Navigator>
          <stackTabs.Screen name='Home' component={BottomStack} options={{
            headerShown: false
          }} />
      </stackTabs.Navigator>}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    data : state.isLogin
  }
}

export default connect(mapStateToProps, {setLogin})(StackTabs)