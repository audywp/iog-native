import React, { Component } from 'react'
import { Container, Card, CardItem, Button, ListItem, Radio, Right, Left } from 'native-base'
import { TouchableOpacity, View, Text, StyleSheet, Modal, ScrollView, Alert } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'
import { createStackNavigator } from '@react-navigation/stack'

import Endas from '../Components/Header'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import DatePicker from 'react-native-datepicker'

//redux
import { UserDetail } from '../Redux/Actions/User/UserDetail'
import { TopUp, GetPayment } from '../Redux/Actions/User/TopUp'
import { dataRoutes } from '../Redux/Actions/Routes'
import { Agents } from '../Redux/Actions/Agent'
import { GetSchedules } from '../Redux/Actions/User/Purchase'
import { connect } from 'react-redux'
import AsyncStorage from '@react-native-community/async-storage'
import LoadingScreen from '../Components/LoadingScreen'

const Stack = createStackNavigator()
const mapStateToProps = state => {
  return {
    userLogin: state.isLogin,
    detail: state.UserDetail,
    route: state.Routes,
    agent: state.Agents
  }
}

export default connect(mapStateToProps, { UserDetail, TopUp, dataRoutes, Agents, GetPayment, GetSchedules })(class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      balance: 150000,
      chosenDate: new Date(),
      departureTime: 'Departure Time',
      userDetail: {},
      modalVisible: false,
      modalVisible1: false,
      start: null,
      end: null,
      agent: null,
      idRoute: 0,
      idAgent: 0,
      nameAgent: null,
      loading: true,
    }
    this.setDate = this.setDate.bind(this)
  }
  setDate(newDate) {
    this.setState({ chosenDate: newDate })
  }
  async componentDidMount() {

    try {
      const id = await AsyncStorage.getItem('id')
      await this.props.UserDetail()
      await this.props.dataRoutes()
      await this.props.dataRoutes()
      await this.props.Agents()
      this.setState({
        loading: false
      })
    } catch (error) {
      console.log(error)
    }
  }

  toggleModal = () => {
    this.setState({
      modalVisible: !this.state.modalVisible
    })
  }
  toggleModal1 = () => {
    this.setState({
      modalVisible1: !this.state.modalVisible1
    })
  }

  getUser = async () => {
    try {
      const id = await AsyncStorage.getItem('id')
      await this.props.UserDetail(id)
    } catch (error) {
      console.log(error)
    }
  }
  PaymentGate = async () => {
    try {
      await this.props.GetPayment()
      this.props.navigation.navigate('Pay')
    } catch (error) {
      console.log(error)
    }
  }

  scheduleUser = async () => {
    try {
      this.setState({
        loading: true
      })
      const data = {
        agent: this.state.nameAgent,
        start: this.state.start,
        end: this.state.end
      }
      console.log(data)
      await this.props.GetSchedules(data)
      this.props.navigation.navigate('Order')
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    console.log(this.props.route)
    return (
      <>
        {this.state.loading ? <LoadingScreen /> : null}
        <Container style={Style.HomeContainer}>
          <Endas />
          <View style={Style.HomeDesc}>
            {/* <ImageBackground style={{flex:1}} source={require ('../Assets/Images/973.jpg')} > */}
            <View style={Style.Profile}>
              <View style={{ paddingHorizontal: 20, height: 40, width: '100%', alignItems: 'center', justifyContent: "space-between", flexDirection: 'row' }}>
                <View style={{ flexDirection: 'row', width: 85, justifyContent: 'space-between', alignItems: 'center' }}>
                  <SimpleLineIcons name='wallet' size={20} color={'white'} />
                  <Text style={{ textAlign: 'center', marginTop: 7, color: 'white', fontSize: 20 }}>Balance</Text>
                </View>
                <Text style={{ textAlign: 'center', marginTop: 7, color: 'white', fontSize: 20 }}>Rp {this.props.detail.data.detail && this.props.detail.data.detail.balance}</Text>
              </View>
              <View style={Style.ProfileDesc}>
                <Button onPress={this.PaymentGate} style={Styles('#5CBFEC').TopButtonIcon}>
                  <Text>
                    <MaterialIcons name='payment' color={'#fff'} size={32} />
                  </Text>
                  <Text style={{ textAlign: 'center', marginTop: 7, color: 'white' }}>Pay</Text>
                </Button>
                <Button onPress={() => this.props.navigation.navigate('TopUp')} style={Styles('#5CBFEC').TopButtonIcon} >
                  <Text>
                    <Feather name='plus-square' color={'#fff'} size={32} />
                  </Text>
                  <Text style={{ textAlign: 'center', marginTop: 7, color: 'white' }}>Top Up</Text>
                </Button>
                <Button style={Styles('#5CBFEC').TopButtonIcon} >
                  <Text>
                    <MaterialCommunityIcons name='comment-question-outline' color={'#fff'} size={32} />
                  </Text>
                  <Text style={{ textAlign: 'center', marginTop: 7, color: 'white' }}>Helps</Text>
                </Button>
              </View>
            </View>

            <View style={Style.navigation}>
              <Card style={{ borderTopEndRadius: 20, borderTopLeftRadius: 20, flexDirection: "row", alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ alignItems: 'center', flex: 1 }}>
                  <CardItem onPress={this.toggleModal} button style={Style.cardFrom} >
                    <View style={{ marginRight: 20 }}>
                      <Text style={{ color: '#555' }}>From</Text>
                      <FontAwesome5 name='route' size={24} color={'#3490db'} />
                    </View>
                    <Text style={{ color: '#555', marginLeft: 8, fontSize: 20 }}> {this.state.start !== null ? `${this.state.start} - ${this.state.end}` : 'Departure Location'} </Text>
                  </CardItem>
                  <CardItem onPress={this.toggleModal1} button style={Style.cardFrom1} >
                    <View style={{ marginRight: 20 }}>
                      <Text style={{ color: '#555' }}>Bus</Text>
                      <FontAwesome5 name='bus' size={20} color={'#3490db'} />
                    </View>
                    <Text style={{ color: '#555', marginLeft: 20, fontSize: 20 }}>{this.state.nameAgent !== null ? `${this.state.nameAgent}` : 'Agency'}</Text>
                  </CardItem>
                </View>
                <View style={{ width: 50, flexDirection: "row" }} >
                  <Fontisto name='arrow-up-l' size={20} color={'#aaa'} />
                  <Fontisto name='arrow-down-l' size={20} color={'#aaa'} />
                </View>
              </Card>
              <Card style={{ borderBottomEndRadius: 20, borderBottomLeftRadius: 20, flexDirection: "row", alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ alignItems: 'center', flex: 1, height: 150, justifyContent: 'space-between' }}>
                  <CardItem button style={Style.cardFrom} >

                    <View style={{ justifyContent: "space-between" }}>
                      <Text style={{ fontSize: 22 }}>Journey Date</Text>
                      <DatePicker
                        style={{ width: 150, height: 65, justifyContent: 'flex-end' }}
                        date={this.state.chosenDate}
                        mode="date"
                        placeholder='Select Date'
                        format="ddd MMM DD"
                        onDateChange={this.setDate}
                        minDate={new Date()}
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                          dateIcon: {
                            height: 40,
                            position: 'absolute',
                            left: 0,
                            top: 13,
                            marginLeft: 0
                          },
                          dateInput: {
                            borderWidth: 0
                          }
                        }}
                        onDateChange={(date) => { this.setState({ chosenDate: date }) }}
                      />
                      <Text style={{ marginLeft: 46 }}> {this.state.departureTime} </Text>
                    </View>
                  </CardItem>
                </View>
                <View style={{ width: 60, flexDirection: "row" }} >
                  <Text style={{ fontSize: 25, color: '#aaa' }}>WIB</Text>
                </View>
              </Card>
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Button onPress={this.scheduleUser} style={{ backgroundColor: '#3475db', marginTop: 13, width: '80%' }} rounded>
                  <Text style={{ color: '#fff', fontSize: 22, textAlign: 'center', width: '100%' }}>Search</Text>
                </Button>
              </View>
            </View>
            {/* </ImageBackground> */}
          </View>

        </Container>
        <Modal visible={this.state.modalVisible} transparent={true}>
          <View style={Style.centeredView}>
            <ScrollView style={Style.modalView}>
              {this.props.route.data.data && this.props.route.data.data.map((v, i) => {
                return (
                  <ListItem key={i} onPress={() => this.setState({
                    idRoute: v.id,
                    start: `${v.start}`,
                    end: `${v.end}`,
                    modalVisible: false
                  })} selected={false}>

                    <Text name={v.end} value={v.start}>{v.start} - {v.end} </Text>

                  </ListItem>
                )
              })}
              <TouchableOpacity style={{
                marginTop: 40
              }} onPress={() => this.setState({
                modalVisible: false
              })}>
                <Text style={{
                  color: '#3490db'
                }}>
                  Cancel
              </Text>
              </TouchableOpacity>
            </ScrollView>

          </View>
        </Modal>
        <Modal visible={this.state.modalVisible1} transparent={true}>
          <View style={Style.centeredView}>
            <View style={Style.modalView}>
              {this.props.agent.data.data && this.props.agent.data.data.map((v, i) => {
                return (
                  <ListItem key={i} onPress={() => this.setState({
                    idRoute: v.id,
                    nameAgent: `${v.name}`,
                    modalVisible1: false
                  })} selected={false}>

                    <Text>{v.name}</Text>

                  </ListItem>
                )
              })}
            </View>
          </View>
        </Modal>
      </>
    )
  }
}
)

const Style = StyleSheet.create({
  HomeContainer: {
    flex: 1,
    borderRadius: 8,
    height: '100%'
  },
  HomeDesc: {
    height: 550,
    backgroundColor: 'white',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 14,
    padding: 8,

  },
  HomeNavigation: {
    flex: 1,
    paddingHorizontal: 10
  },
  Location: {
    flexDirection: "row"
  },
  cardFrom: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    alignItems: 'flex-end',
    width: '90%',
  },
  cardFrom1: {
    flexDirection: 'row',

    alignItems: 'flex-end',
    width: '90%',
  },
  navigation: {
    height: '100%',
    flex: 1,
  },
  Profile: {
    alignItems: "center",
    height: 110,
    backgroundColor: '#3499db',
    borderRadius: 20,
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
    height: 100,
    backgroundColor: '#3475db',
    borderBottomEndRadius: 10,
    borderBottomLeftRadius: 10,
    width: '100%'
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '80%',
    height: 500,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 250
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center'
  }
})

const Styles = (iconColor) => StyleSheet.create({
  ButtonNav: {
    height: 50,
    width: 50,
    borderRadius: 50,
    justifyContent: "center",
    backgroundColor: iconColor
  },
  TopButtonIcon: {
    height: 50,
    width: 50,
    justifyContent: "center",
    backgroundColor: 'rgba(0,0,0,0)',
    elevation: 0,
    flexDirection: 'column'
  }
})