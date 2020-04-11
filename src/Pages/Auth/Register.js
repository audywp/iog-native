import React, { Component } from 'react'
import {Container, Form, Button, Item, Input, View, Text, Left} from 'native-base'
import {StyleSheet, Button as Btn} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

const Style = StyleSheet.create({
  Container: {
    
    alignItems: "center",
    
  },

  Register: {
    width: 285,
    backgroundColor: 'white',
    padding: 10,
    paddingVertical: 30,
    borderRadius: 5,
    borderTopEndRadius: 40,
    borderBottomLeftRadius: 40,
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

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }

  async componentDidMount(){
    const checkToken = await AsyncStorage.getItem('token')
    console.log(checkToken)
  }
  render() {
    
    return (
      <>
        <Container style={Style.Container}>
          <View style={{flex: 1, justifyContent: 'center' }}><Text style={{ fontSize: 26 }}>Sign Up</Text></View>
          <View style={Style.Register}>
            <Form>
              <Item>
                {/* <Label> {this.props.name} </Label> */}
                <Input placeholder='Name' textContentType='name' id='name' />
              </Item>
              <Item>
                {/* <Label> {this.props.name} </Label> */}
                <Input placeholder='Email' textContentType='emailAddress' id='email' />
              </Item>
              <Item>
                {/* <Label> {this.props.name} </Label> */}
                <Input placeholder='Username' textContentType='username' id='username' />
              </Item>
              <Item>
                {/* <Label> {this.props.name} </Label> */}
                <Input placeholder='Password' textContentType='password' id='password' />
              </Item>
              <Item>
                {/* <Label> {this.props.name} </Label> */}
                <Input placeholder='Confirm Password' textContentType='password' id='Cpassword' />
              </Item>
              <Item>
                {/* <Label> {this.props.name} </Label> */}
                <Input placeholder='Phone' textContentType='telephoneNumber' id='phone' />
              </Item>
            </Form>
          </View>
          <View style={{flex:1, marginTop: 20, marginBottom: 10}}><Button style={{backgroundColor:'#3498db', alignItems: "center", borderRadius: 8, width: 200}}><Text style={{flex:1, textAlign: "center",}}>Register</Text></Button></View>
          <View style={{flex: 1}} >
               <Text>Have an account?</Text>
               <Button transparent onPress={()=> this.props.navigation.navigate('Login')} title='Login' ><Text style={{flex:1, textAlign:'center'}}>Login</Text></Button>
          </View>
        </Container>
      </>
    );
  }
}

export default Register;