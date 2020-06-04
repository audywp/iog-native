/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {
  Container,
  Form,
  Button,
  Item,
  Input,
  View,
  Text,
  Left,
  Spinner,
  Toast,
} from 'native-base';
import {
  StyleSheet,
  Button as Btn,
  ScrollView,
  Keyboard,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
// eslint-disable-next-line prettier/prettier
import { connect } from 'react-redux';
import { isRegister } from '../../Redux/Actions/Auth/Register';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import imageDefault from '../../Assets/Images/default.png';
const Style = StyleSheet.create({
  Container: {
    alignItems: 'center',
  },

  Register: {
    height: 400,
    justifyContent: 'space-between',
    width: 285,
    backgroundColor: 'white',
    borderRadius: 5,
    borderTopEndRadius: 40,
    borderBottomLeftRadius: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
    alignItems: 'center',
    paddingTop: 10,
  },
});

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      picture: '-',
      username: null,
      password: '',
      confimPassword: '',
      name: null,
      email: null,
      phone: null,
      visibilityPassword: true,
      icons: 'visibility',
      isLoading: true,
      content: <Text>Register</Text>,
    };

    this.setPasswordVisibility = () => {
      if (this.state.visibilityPassword === false) {
        this.setState({
          icons: (this.state.icons = 'visibility'),
          visibilityPassword: !this.state.visibilityPassword,
        });
      } else {
        this.setState({
          icons: (this.state.icons = 'visibility-off'),
          visibilityPassword: !this.state.visibilityPassword,
        });
      }
    };

  }
  onRegister = () => {
    this.setState({
      isLoading: false
    })
    try {

      const {
        picture,
        username,
        password,
        confirmPassword,
        name,
        phone,
        email,
      } = this.state;

      if (
        (username && password && name && confirmPassword && email && phone) !==
        null
      ) {
        if (this.state.password === this.state.confirmPassword) {
          const data = {
            picture,
            username,
            password,
            name,
            phone,
            email,
          };
          this.props.isRegister(data).then(() => {
            this.setState({
              isLoading: this.props.data.isLoading,
            });
            this.props.navigation.navigate('Verification', { email: this.state.email });
          });
        } else {
          Alert.alert("your password didn't match");
        }
      } else {
        Alert.alert('You must fill all form input');
        this.setState({
          isLoading: true
        })
      }
    } catch (error) {
      console.log(error)
    }
  };

  async componentDidMount() {
    console.log(this.state.password, this.state.confimPassword);
  }
  render() {
    return (
      <ScrollView>
        <Container style={Style.Container}>
          <View style={{ height: 60, justifyContent: 'center' }}>
            <Text style={{ fontSize: 26 }}>Sign Up</Text>
          </View>
          <View style={Style.Register}>
            <Form>
              <View>
                <Item>
                  {/* <Label> {this.props.name} </Label> */}
                  <Input
                    onChangeText={text => this.setState({ name: text })}
                    placeholder="Full Name"
                    textContentType="name"
                    id="name"
                  />
                </Item>
                <Item>
                  {/* <Label> {this.props.name} </Label> */}
                  <Input
                    onChangeText={text => this.setState({ username: text })}
                    placeholder="Username"
                    textContentType="username"
                    id="username"
                  />
                </Item>
                <Item>
                  {/* <Label> {this.props.name} </Label> */}
                  <Input
                    secureTextEntry={this.state.visibilityPassword}
                    onChangeText={text => this.setState({ password: text })}
                    placeholder="Password"
                    textContentType="password"
                    id="password"
                  />
                  <MaterialIcons
                    onPress={this.setPasswordVisibility}
                    name={this.state.icons}
                    size={12}
                    color={'black'}
                    style={{ marginRight: 10 }}
                  />
                </Item>
                <Item>
                  {/* <Label> {this.props.name} </Label> */}
                  <Input
                    secureTextEntry={this.state.visibilityPassword}
                    onChangeText={text =>
                      this.setState({ confirmPassword: text })
                    }
                    placeholder="Confirm Password"
                    textContentType="password"
                    id="Cpassword"
                  />
                  <MaterialIcons
                    onPress={this.setPasswordVisibility}
                    name={this.state.icons}
                    size={12}
                    color={'black'}
                    style={{ marginRight: 10 }}
                  />
                </Item>

                <Item>
                  {/*Phone*/}
                  <Input
                    onPress={Keyboard.dismiss}
                    onChangeText={text => this.setState({ phone: text })}
                    placeholder="Phone"
                    textContentType="telephoneNumber"
                    id="phone"
                  />
                </Item>
                <Item>
                  {/* <Label> {this.props.name} </Label> */}
                  <Input
                    onChangeText={text => this.setState({ email: text })}
                    placeholder="Email"
                    textContentType="emailAddress"
                    id="email"
                  />
                </Item>
              </View>

              <View style={{ marginTop: 20, justifyContent: 'center' }}>
                <Button
                  onPress={this.onRegister}
                  style={{
                    justifyContent: 'center',
                    backgroundColor: '#3498db',
                    alignItems: 'center',
                    borderRadius: 8,
                    width: 200,
                  }}>
                  {this.state.isLoading ? this.state.content : <Spinner color='white' size={22} />}


                </Button>
              </View>
            </Form>
          </View>
          <View style={{ flex: 1, marginTop: 20 }}>
            <Text>Have an account?</Text>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate('Login')}
              title="Login">
              <Text style={{ flex: 1, textAlign: 'center' }}>Login</Text>
            </Button>
          </View>
        </Container>
      </ScrollView>
    );
  }
}
const mapStateToProps = state => {
  return {
    data: state.isRegister,
  };
};
export default connect(
  mapStateToProps,
  { isRegister },
)(Register);
