import React, { Component } from 'react'
import {Container, Input, Row, Button, Thumbnail} from 'native-base'
import {ImageBackground, View, Text, StyleSheet} from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Foundation from 'react-native-vector-icons/Foundation'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import {createStackNavigator} from '@react-navigation/stack'
import Register from './Register'

const Stack = createStackNavigator()

const Style = StyleSheet.create({
  HomeContainer: {
    flex: 1,
    padding: 7,
    borderRadius: 8,
  },
  HomeDesc:{
    height: 310,
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
    flexDirection: "row", 
    alignItems: "center", 
    height:70, 
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
  }
})

const Styles = (iconColor) => StyleSheet.create({
  ButtonNav: {
    height: 50,
    width: 50,
    borderRadius:50,
    justifyContent: "center",
    backgroundColor : iconColor
  }
})

export default class Home extends Component {

  render() {
    const ColorIcon = this.props.colorIcon
    return (
      <>

        <Container style={Style.HomeContainer}>
          <View style={Style.HomeDesc}>
            {/* <ImageBackground style={{flex:1}} source={require ('../Assets/Images/973.jpg')} > */}
                <View style={Style.Profile}>
                  <Thumbnail source={require('../Assets/Images/person1.jpg')} />
                  <View style= {{justifyContent: "space-around"}}>
                    <Text style={{marginLeft: 10, marginBottom: 3, color:'white'}}>Audy</Text>
                    <Text style={{marginLeft: 10, marginBottom: 3, color:'white'}}>Balance: Rp250.000</Text>
                    <Text style={{marginLeft: 5, marginBottom: 3, color:'white'}}> <MaterialIcons name='location-on' />Indonesia</Text>
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
