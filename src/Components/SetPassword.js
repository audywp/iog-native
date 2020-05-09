import React, { Component } from 'react'
import {Container, Form, Button, Item, Input, View, Text, Left, Spinner} from 'native-base'
import {StyleSheet, Button as Btn, Alert} from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import {setVerification} from '../Redux/Actions/Auth/Login'
import {connect} from 'react-redux'
const Style = StyleSheet.create({
  Container: {
    
    alignItems: "center",
    
  },

  Register: {
    width: 285,
    backgroundColor: 'white',
    padding: 10,
    paddingVertical: 30,
    borderRadius: 1,
    borderTopEndRadius: 40,
    borderBottomLeftRadius: 40,
    borderWidth: 1,
    borderColor: '#3498db',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  }
})

class SetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      username: null,
      VerificationCode: '',
      newPassword: '',
      icons: 'visibility',
      visibilityPassword: true,
      isLoading: false,
      content: <Text>Login</Text>,
      VerificationCode : ''
    };

    this.setPasswordVisibility = () => {
      if (this.state.visibilityPassword === false) {
        this.setState({
          icons: this.state.icons = 'visibility',
          visibilityPassword: !this.state.visibilityPassword
        })
      } else {
        this.setState({
          icons: this.state.icons = 'visibility-off',
          visibilityPassword: !this.state.visibilityPassword
        })
      }
    }

    this.resetPassword = () => {
      
    }
  }


  render() {
    return (
      <Container style={Style.Container}>
          <View style={{flex: 1, justifyContent: 'center' }}><Text style={{ fontSize: 26 }}>IOG</Text></View>
          <View style={Style.Register}>
            <Form >
              <Item>
                {/* <Label> {this.props.name} </Label> */}
                <Input onChangeText = {text => this.setState({username: text})} placeholder='Username' textContentType='username' id='username' />
              </Item>
              <Item>
                {/* <Label> {this.props.name} </Label> */}
                <Input value= {this.props.route.params.data} onChangeText = {text => this.setState({VerificationCode: text})} placeholder='Verification' textContentType='username' id='username' />
              </Item>
              <View style= {{ justifyContent: "center", alignItems: "center"}}>
                <Button style={{ justifyContent : 'center', backgroundColor:'#3498db', alignItems: "center", borderRadius: 8, width: 200, marginTop: 20,}} onPress={this.setVerification} >
                  {this.state.content}
                </Button>
              </View>

              <View>
                
              </View>
            </Form>
          </View>
          <View style={{flex: 1, marginTop: 40}} >
               <Text>Don't have an account?</Text>
               <Button onPress = {()=> {this.props.navigation.navigate('Register')}} transparent title='Login' ><Text style={{flex:1, textAlign:'center'}}>Sign up</Text></Button>
          </View>
        </Container>
    );
  }
}
const mapStateToProps = state => {
  return {
    data : state.isLogin
  }
}
export default connect(mapStateToProps, {setVerification}) (SetPassword);