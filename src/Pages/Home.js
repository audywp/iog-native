import React, { Component } from 'react'
import {Container, Card, CardItem, Button, } from 'native-base'
import { TouchableOpacity, View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'
import {createStackNavigator} from '@react-navigation/stack'
import Endas from '../Components/Header'
const Stack = createStackNavigator()

const Style = StyleSheet.create({
  HomeContainer: {
    flex: 1,
    padding: 7,
    borderRadius: 8,
  },
  HomeDesc:{
    height: 300,
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
    marginTop: 15
  },
  Location: {
    flexDirection: "row"
  },
  navI:{
    flexDirection: 'row',
    justifyContent: "space-around"
  },
  navigation : {
    justifyContent:"center",
    alignItems: "center",
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
      <ScrollView>

        <Container style={Style.HomeContainer}>
          <Endas />
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
                <TouchableOpacity>
                  <AntDesign name='pluscircleo' size={80} color={'#3490db'} />
                </TouchableOpacity>
                
              </View>
            {/* </ImageBackground> */}
          </View>

          <View style={Style.HomeNavigation}>
            <View>
              <Card style={{width: '100%', borderRadius: 30 }}>
                <CardItem cardBody >
                  <Image source={require('../Assets/Images/973.jpg')} style={{ borderRadius: 20, height: 200, flex: 1}} />
                </CardItem>
                <CardItem>
                  <Text>PILIH TEMPAT DUDUK YANG ANDA INGINKAN</Text>
                </CardItem>
              </Card>
            </View>
          </View>
        </Container>
      </ScrollView>
    )
  }
}
