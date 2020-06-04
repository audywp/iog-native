import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../Pages/Auth/Login'
import Register from '../Pages/Auth/Register'
import BottomStack from './BottomTabs';
import { setLogin } from '../Redux/Actions/Auth/Login'
import { connect } from 'react-redux'

// component & screens
import ForgotPassword from './ForgotPasword'
import SetPassowrd from './SetPassword'
import TopUp from '../Pages/Payment/TopUp'
import Status from '../Pages/Payment/Status'
import Pending from '../Pages/Payment/Pending'
import Verification from '../Pages/Verification'

const stackTabs = createStackNavigator()
class StackTabs extends Component {


  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log(this.props.data.isLogged)
  }
  render() {
    return (
      <>
        {this.props.data && this.props.data.isLogged === false ?
          <stackTabs.Navigator>
            <stackTabs.Screen name='Login' component={Login} options={{ headerShown: false }} />
            <stackTabs.Screen name='Register' component={Register} options={{ headerShown: false }} />
            <stackTabs.Screen name='ForgotPassword' component={ForgotPassword} />
            <stackTabs.Screen name='SetPassword' component={SetPassowrd} />
            <stackTabs.Screen name='Verification' component={Verification} options={{ headerShown: false }} />

          </stackTabs.Navigator> :
          <stackTabs.Navigator>
            <stackTabs.Screen name='Home' component={BottomStack} options={{
              headerShown: false
            }} />
            <stackTabs.Screen name='TopUp' component={TopUp} options={{
              headerTintColor: 'white',
              headerStyle: { backgroundColor: '#3475db' }
            }} />
            <stackTabs.Screen name='Status Payment' component={Status} options={{
              headerShown: false
            }} />
            <stackTabs.Screen name='Pay' component={Pending} options={{
              headerTintColor: 'white',
              headerStyle: { backgroundColor: '#3475db' }
            }} />
          </stackTabs.Navigator>}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.isLogin
  }
}

export default connect(mapStateToProps, { setLogin })(StackTabs)