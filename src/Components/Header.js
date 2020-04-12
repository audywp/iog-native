import React, { Component } from 'react'
import {Text} from 'react-native'
import {Thumbnail, Header as Endas, Title, Icon, Left, Right, Body, Button} from 'native-base'
import AntDesign from 'react-native-vector-icons/AntDesign'
import {connect} from 'react-redux'
import {setLogout} from '../Redux/Actions/Auth/Login'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {  };

    this.isLogout = () => {
      this.props.setLogout()
    }
  }

  componentDidMount(){
    console.log('ass', this.props.data)
  }
  render() {
    return (
      <Endas>
        <Left>
          <Thumbnail small source={require('../Assets/Images/person1.jpg')} />
        </Left>
        <Body>
          <Title>Audy</Title>
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
    data: state.isLogin
  }
}

export default connect(mapStateToPRops, {setLogout})(Header)