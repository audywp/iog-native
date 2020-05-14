import React, { Component } from 'react'
import {Text} from 'react-native'
import {Thumbnail, Header as Endas, Title, Icon, Left, Right, Body, Button} from 'native-base'
import AntDesign from 'react-native-vector-icons/AntDesign'
import {connect} from 'react-redux'
import { UserDetail } from '../Redux/Actions/User/UserDetail'
import {setLogout} from '../Redux/Actions/Auth/Login'
import config from '../utils/Config'
import AsyncStorage from '@react-native-community/async-storage'
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {  };

    this.isLogout = async () => {
      try {
        await AsyncStorage.removeItem('token')
        await AsyncStorage.clear()
        this.props.setLogout()
      } catch (error) {
        console.log(error)
      }
    }
  }

  componentDidMount = async () => {
    try {
      const id = await AsyncStorage.getItem('id')
      console.log(id)
      await this.props.UserDetail(id)
    } catch (error) {
      console.log(error)
    }
  }
  render() {
    return (
      <Endas>
        <Left>
          <Thumbnail small source={require('../Assets/Images/person1.jpg')} />
        </Left>
        <Body>
          <Title>{this.props.userLogin.data.data && this.props.userLogin.data.data.username}</Title>
        </Body>
        <Right>
          <Button onPress={this.isLogout} transparent style={{flexDirection: 'column'}}>
            <AntDesign color={'white'} size={20} name='logout' />
            <Text style={{color: 'white'}}>Logout</Text>
          </Button>
        </Right>
      </Endas>
    );
  }
}

const mapStateToPRops = state => {
  return {
    userLogin: state.isLogin
  }
}

export default connect(mapStateToPRops, {setLogout, UserDetail})(Header)