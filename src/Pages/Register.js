import React, { Component } from 'react'
import {Container, Content, Form, Item, Input, View, Text} from 'native-base'
import {StyleSheet} from 'react-native'

const Style = StyleSheet.create({
  Container: {
    backgroundColor: 'red',
    alignItems: "center",
    
  },

  Register: {
    width: 285,
    backgroundColor: 'white',
    padding: 10,
    paddingVertical: 30,
    borderRadius: 5,
    borderTopEndRadius: 40,
    borderBottomLeftRadius: 40
  }
})

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <>
        <Container style={Style.Container}>
          <View style={{flex: 1, backgroundColor: 'white', justifyContent: 'center' }}><Text style={{ fontSize: 26 }}>Register</Text></View>
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
          <View style={{flex:1}}></View>
        </Container>
      </>
    );
  }
}

export default Register;