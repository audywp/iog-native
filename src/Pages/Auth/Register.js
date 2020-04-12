import React, { Component } from 'react'
import {Container, Form, Button, Item, Input, View, Text, Left, Spinner, Toast} from 'native-base'
import {StyleSheet, Button as Btn, ScrollView, Keyboard, Alert} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import { connect } from 'react-redux'
import {isRegister} from '../../Redux/Actions/Auth/Register'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import imageDefault from '../../Assets/Images/default.png'
const Style = StyleSheet.create({
  Container: {
    
    alignItems: "center",
    
  },

  Register: {
    height: 385,
    justifyContent: "space-between",
    width: 285,
    backgroundColor: 'white',
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
    alignItems: 'center',
    paddingTop: 10
  }
})

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      picture : imageDefault,
      username:null,
      password:null,
      name: null,
      email: null,
      phone: null,
      visibilityPassword: true,
      icons: 'visibility',
      isLoading: false,
      content: <Text>Register</Text>
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

    this.onRegister = () => {
      const {username, password, name, email, phone} = this.state
      
      // if (this.props.data.isLoading === false) {
      //   this.setState({
      //     isLoading: !this.state.isLoading,
      //     content : this.state.content = <Spinner color='white' />
      //   })
      // } else {
      //   this.setState({
      //     isLoading: !this.state.isLoading,
      //     content : this.state.content = <Text>Register</Text>
      //   })
        
      // }
      
      if ((username && password && name && email && phone) !== null) {
        const data= {
          username: username,
          password: password,
          name: name,
          email: email,
          phone: phone
        }
        this.props.isRegister(data)
        this.props.navigation.navigate('Login')
      } else {
        Alert.alert('You must fill all form input')
        
      }
      
    }
  }

  async componentDidMount(){
    
    console.log(this.props.data)
  }
  render() {
    
    return (
      <>
        <Container style={Style.Container}>
          <View style={{height: 60, justifyContent: 'center' }}><Text style={{ fontSize: 26 }}>Sign Up</Text></View>
          <View style={Style.Register}>
            <Form >
              <View>
              <Item >
                {/* <Label> {this.props.name} </Label> */}
                <Input onChangeText = {text => this.setState({name: text})} placeholder='Name' textContentType='name' id='name' />
              </Item>
              <Item>
                {/* <Label> {this.props.name} </Label> */}
                <Input onChangeText = {text => this.setState({email: text})} placeholder='Email' textContentType='emailAddress' id='email' />
              </Item>
              <Item>
                {/* <Label> {this.props.name} </Label> */}
                <Input onChangeText = {text => this.setState({username: text})} placeholder='Username' textContentType='username' id='username' />
              </Item>
              <Item>
                {/* <Label> {this.props.name} </Label> */}
                <Input secureTextEntry= {this.state.visibilityPassword} onChangeText = {text => this.setState({password: text})} placeholder='Password' textContentType='password' id='password' />
                <MaterialIcons onPress={this.setPasswordVisibility} name={this.state.icons} size={12} color = { 'black' } style={{marginRight: 10}} />
              </Item>
              <Item>
                {/* <Label> {this.props.name} </Label> */}
                <Input onPress={Keyboard.dismiss} placeholder='Phone' textContentType='telephoneNumber' id='phone' />
              </Item>
              </View>
              
                <View style={{marginTop: 20, justifyContent: "center"}}>
                  <Button onPress={this.onRegister} style={{justifyContent: "center", backgroundColor:'#3498db', alignItems: "center", borderRadius: 8, width: 200}}>
                    {this.state.content}
                  </Button>
                </View>
              
            </Form>
          </View>
          <View style={{flex: 1, marginTop: 20}} >
               <Text>Have an account?</Text>
               <Button transparent onPress={()=> this.props.navigation.navigate('Login')} title='Login' ><Text style={{flex:1, textAlign:'center'}}>Login</Text></Button>
          </View>
        </Container>
      </>
    )
  }
}
const mapStateToProps = state => {
  return {
    data: state.isRegister
  }
}
export default connect(mapStateToProps, {isRegister}) (Register)