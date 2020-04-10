import React, { Component } from 'react'
import {Container, Form, Button, Item, Input, View, Text, Left} from 'native-base'
import {StyleSheet, Button as Btn} from 'react-native'

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

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    
    return (
      <>
        <Container style={Style.Container}>
          <View style={{flex: 1, justifyContent: 'center' }}><Text style={{ fontSize: 26 }}>Login</Text></View>
          <View style={Style.Register}>
            <Form>
              
              
              <Item>
                {/* <Label> {this.props.name} </Label> */}
                <Input placeholder='Username' textContentType='username' id='username' />
              </Item>

              <Item>
                {/* <Label> {this.props.name} </Label> */}
                <Input placeholder='Phone' textContentType='telephoneNumber' id='phone' />
              </Item>
            </Form>
          </View>
          <View style={{flex:1, marginTop: 30}}><Button style={{backgroundColor:'#3498db', alignItems: "center", borderRadius: 8, width: 200}}><Text style={{flex:1, textAlign: "center",}} onPress={()=>this.props.navigation.navigate('Home')} >Login</Text></Button></View>
          <View style={{flex: 1}} >
               <Text>Don't have an account?</Text>
               <Button transparent onPress={()=> this.props.navigation.navigate('Register')} title='Login' ><Text style={{flex:1, textAlign:'center'}}>Sign up</Text></Button>
          </View>
        </Container>
      </>
    );
  }
}

export default Register;