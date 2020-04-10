import React, { Component } from 'react'
import {Container, Input, Row, Button, Thumbnail, Header, Title, Icon, Left, Right, Body} from 'native-base'
import {ImageBackground, View, Text, StyleSheet, } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Foundation from 'react-native-vector-icons/Foundation'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'
import {createStackNavigator} from '@react-navigation/stack'
const Stack = createStackNavigator()

const Style = StyleSheet.create({
  HomeContainer: {
    flex: 1,
    padding: 7,
    borderRadius: 8,
  },
  HomeDesc:{
    height: 380,
    backgroundColor: 'white',
    shadowColor: "#000",
    shadowOffset: {
    width: 0,
    height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 14,
    borderRadius: 15,
    padding: 8,
    
  },
  HomeNavigation: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  Location: {
    flexDirection: "row"
  },
  navI:{
    flexDirection: 'row',
    justifyContent: "space-around"
  },
  navigation : {
    justifyContent:"space-around",
    flex: 1,
    
  },
  Profile: {
    alignItems: "center", 
    height:110,
    backgroundColor:'#3498db', 
    borderTopEndRadius: 20,
    borderTopLeftRadius: 20, 
    paddingHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: {
    width: 0,
    height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.30,
    elevation: 5,
    marginBottom: 15,
  },
  ProfileDesc: {
    flex: 1,
    flexDirection: "row", 
    alignItems: "center", 
    justifyContent: "space-evenly",
    height:100, 
    backgroundColor:'#3490db',
    borderRadius: 10,
    width: '100%'
  }
})

const Styles = (iconColor) => StyleSheet.create({
  ButtonNav: {
    height: 50,
    width: 50,
    borderRadius:50,
    justifyContent: "center",
    backgroundColor : iconColor
  },
  TopButtonIcon: {
    height: 50,
    width: 50,
    justifyContent: "center",
    backgroundColor : 'rgba(0,0,0,0)',
    elevation: 0,
    flexDirection: 'column'
  }
})

export default class Home extends Component {

  constructor(props){
    super(props)
    this.state = {
      balance: 150000
    }
    
  }

  render() {
    const ColorIcon = this.props.colorIcon
    return (
      <>

        <Container style={Style.HomeContainer}>
          <Header>
            <Left>
              <Thumbnail small source={require('../Assets/Images/person1.jpg')} />
            </Left>
            <Body>
              <Title>Audy</Title>
            </Body>
            <Right>
              <Button transparent>
                <Icon name='search' />
              </Button>
              <Button transparent>
                <Icon name='heart' />
              </Button>
              <Button transparent>
                <Icon name='more' />
              </Button>
            </Right>
          </Header>
          <View style={Style.HomeDesc}>
            {/* <ImageBackground style={{flex:1}} source={require ('../Assets/Images/973.jpg')} > */}

                <View style={Style.Profile}>
                  <View style={{ paddingHorizontal: 20 ,height:40, width: '100%', alignItems: 'center', justifyContent: "space-between", flexDirection:'row'}}>
                    <Text style={{textAlign: 'center', marginTop: 7, color: 'white'}}>Balance</Text>
                    <Text style={{textAlign: 'center', marginTop: 7, color: 'white'}}>Rp {this.state.balance}</Text>
                  </View>
                  <View style={Style.ProfileDesc}>
                    <Button style={Styles('#5CBFEC').TopButtonIcon}>
                      <Text>
                        <MaterialIcons name='payment' color={'#fff'} size={32} />
                      </Text>
                      <Text style={{textAlign: 'center', marginTop: 7, color: 'white'}}>Pay</Text>
                    </Button>
                      <Button style={Styles('#5CBFEC').TopButtonIcon} >
                        <Text>
                          <Feather name='plus-square' color={'#fff'} size={32} />
                        </Text>
                        <Text style={{textAlign: 'center', marginTop: 7, color: 'white'}}>Top Up</Text>
                      </Button>
                      <Button style={Styles('#5CBFEC').TopButtonIcon} >
                        <Text>
                          <MaterialCommunityIcons name='comment-question-outline' color={'#fff'} size={32} />
                        </Text>
                        <Text style={{textAlign: 'center', marginTop: 7, color: 'white'}}>Helps</Text>
                      </Button>
                    </View>
                </View>
              
              <View style={Style.navigation}>
               <View style = {Style.navI}>
                  <View>
                    <Button style={Styles('#5CBFEC').ButtonNav} color={'red'}>
                      <Text>
                        <MaterialIcons name='directions-bus' color={'#fff'} size={30} />
                      </Text>
                    </Button>
                    <Text style={{textAlign: 'center', marginTop: 7}}>Bus</Text>
                  </View>
                  <View>
                    <Button style={Styles('#1D5DA4').ButtonNav}>
                      <Text>
                      <MaterialIcons name='event' color={'#fff'} size={30} />
                      </Text>
                    </Button>
                    <Text style={{textAlign: 'center', marginTop: 7}}>Event</Text>
                    </View>
                  <View>
                    <Button style={Styles('#EFA338').ButtonNav}>
                      <Text>
                      <MaterialIcons name='schedule' color={'#fff'} size={30} />
                      </Text>
                    </Button>
                    <Text style={{textAlign: 'center', marginTop: 7}}>Schedules</Text>
                  </View>
               </View>
               <View style = {Style.navI}>
                  <View>
                    <Button style={Styles('#10ac84').ButtonNav}>
                      <Text>
                      <Foundation name='ticket' color={'#fff'} size={30} />
                      </Text>
                    </Button>
                    <Text style={{textAlign: 'center', marginTop: 7}}>Ticket</Text>
                  </View>
                  <View>
                    <Button style={Styles('#5f27cd').ButtonNav}>
                      <Text>
                      <MaterialCommunityIcons name='clipboard-text-outline' color={'#fff'} size={30} />
                      </Text>
                    </Button>
                    <Text style={{textAlign: 'center', marginTop: 7}}>History</Text>
                  </View>
                  <View>
                    <Button style={Styles('white').ButtonNav}>
                      <Text>
                      <SimpleLineIcons name='options' color={'#333'} size={30} />
                      </Text>
                    </Button>
                    <Text style={{textAlign: 'center', marginTop: 7}}>Settings</Text>
                  </View>
               </View>
              </View>
            {/* </ImageBackground> */}
          </View>

          <View style={Style.HomeNavigation}>
            <Text>
              Coming soon
            </Text>
          </View>
        </Container>
      </>
    )
  }
}
