import React, { Component } from 'react'
import { TouchableOpacity, Text, View, StyleSheet, ScrollView, Alert } from 'react-native'
import { Button, Picker, Form, Card, DatePicker } from 'native-base'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { buttonStyle } from '../utils/style'
import { dataSchedule } from '../Redux/Actions/Schedule'
import { Purchase, CreatePayment } from '../Redux/Actions/User/Purchase'
import { UserDetail } from '../Redux/Actions/User/UserDetail'
import { connect } from 'react-redux'
import LinearGradient from 'react-native-linear-gradient'
import AsyncStorage from '@react-native-community/async-storage'
import LoadingScreen from '../Components/LoadingScreen'

const style = StyleSheet.create({
  cardBody: {
    flex: 1,
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 5
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingHorizontal: 8
  }
})


class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBus: "bus0",
      selectedRoutesFrom: 'Route0',
      selectedRoutesTo: 'to0',
      chosenDate: new Date(),
      loading: false
    };
  }

  makePurchase = async (id, price) => {

    try {
      const idUser = await AsyncStorage.getItem('id')
      const data = {
        idSchedule: id
      }
      this.setState({
        loading: true
      })
      const token = await AsyncStorage.getItem('token')
      await this.props.Purchase(token, data).then(async () => {

        if (this.props.scheduleUser.dataPurchase.success) {
          const data = {
            name: this.props.scheduleUser.dataPurchase && this.props.scheduleUser.dataPurchase.newUserd.name,
            orderId: `iogTravel${Date.now()}`,
            amount: price,
            store: 'Cash',
            method: 'Ticket Bus',
            status: 'Done'
          }
          await this.props.CreatePayment(data)
          await this.props.dataSchedule()
          await this.props.UserDetail(await AsyncStorage.getItem('token'))
          this.props.navigation.navigate('Home')
          this.setState({
            loading: false
          })
        } else {
          Alert.alert(this.props.scheduleUser.dataPurchase.msg)
          this.setState({
            loading: false
          })
          this.props.navigation.navigate('TopUp')

        }
      })
    } catch (error) {
      console.log(error)
    }
  }

  async componentDidMount() {
    try {
      await this.props.dataSchedule()
      this.setState({
        loading: false
      })
      console.log(this.props.data.data.result)
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    if (this.props.scheduleUser.Schedules.schedule) {
      return (
        <>
          {this.state.loading ? <LoadingScreen /> : null}
          <View horizontal={true} style={buttonStyle.Body}>
            <View style={{ flex: 1, justifyContent: "space-between" }}>
              <View style={buttonStyle.Header}>
                <Text style={{ fontFamily: 'Roboto', fontSize: 25, marginBottom: 10 }} >Choose your schedules</Text>
              </View>


              <ScrollView style={{ flex: 1, flexDirection: "column" }} >

                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                  {this.props.scheduleUser.Schedules.schedule && this.props.scheduleUser.Schedules.schedule.map((schedule, i) => {
                    return (

                      <Card ScrollView style={{ width: '85%', height: 180, borderRadius: 10, paddingHorizontal: 10 }}>
                        <TouchableOpacity onPress={() => this.makePurchase(schedule.id, schedule.price)} style={style.cardBody}>
                          <View style={style.cardContainer}>
                            <Text style={{ fontSize: 16 }}>{schedule.car_name}</Text>
                            <Text style={{ fontSize: 16 }}>Available Seat {schedule.bus_seat}</Text>
                          </View>
                          <View style={style.cardContainer}>
                            <View style={{
                              flexDirection: 'row',
                              alignItems: 'center',
                            }}>
                              <Text style={{ fontSize: 16, marginRight: 10 }}>{schedule.start} </Text>
                              <Ionicons name='ios-return-right' size={40} color='#3475db' />
                              <Text style={{ fontSize: 16, marginLeft: 10 }}>{schedule.end} </Text>
                            </View>
                            <View style={{
                              justifyContent: 'center'
                            }}>
                              <Text> Rp. {schedule.price} </Text>
                            </View>
                          </View>
                          <View style={style.cardContainer}>
                            <Text style={{ fontSize: 16 }}>Date</Text>
                            <Text style={{ fontSize: 16 }}> Time </Text>
                          </View>

                          <View style={style.cardContainer}>
                            <Text style={{ marginLeft: 5, fontSize: 16 }}>{schedule.departure_date.slice(0, 10)} </Text>
                            <Text style={{ marginRight: 5, fontSize: 16 }}>{schedule.departure_time.slice(0, 10)} - {schedule.arrive_time} </Text>
                          </View>
                        </TouchableOpacity>
                      </Card>

                    )
                  })}
                </View>
              </ScrollView>


            </View>
          </View>

        </>
      )
    } else {
      return (
        <>
          {this.state.loading ? <LoadingScreen /> : null}
          <View horizontal={true} style={buttonStyle.Body}>
            <View style={{ flex: 1, justifyContent: "space-between" }}>
              <View style={buttonStyle.Header}>
                <Text style={{ fontFamily: 'Roboto', fontSize: 25, marginBottom: 10 }} >Choose your schedules</Text>
              </View>


              <ScrollView style={{ flex: 1, flexDirection: "column" }} >
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                  {this.props.data.data.result && this.props.data.data.result.map((schedule, i) => {
                    return (

                      <Card ScrollView style={{ width: '85%', height: 180, borderRadius: 10, paddingHorizontal: 10 }}>
                        <TouchableOpacity onPress={() => this.makePurchase(schedule.id, schedule.price)} style={style.cardBody}>
                          <View style={style.cardContainer}>
                            <Text style={{ fontSize: 16 }}>{schedule.car_name}</Text>
                            <Text style={{ fontSize: 16 }}>Available Seat {schedule.bus_seat}</Text>
                          </View>
                          <View style={style.cardContainer}>
                            <View style={{
                              flexDirection: 'row',
                              alignItems: 'center',
                            }}>
                              <Text style={{ fontSize: 16, marginRight: 10 }}>{schedule.start} </Text>
                              <Ionicons name='ios-return-right' size={40} color='#3475db' />
                              <Text style={{ fontSize: 16, marginLeft: 10 }}>{schedule.end} </Text>
                            </View>
                            <View style={{
                              justifyContent: 'center'
                            }}>
                              <Text> Rp. {schedule.price} </Text>
                            </View>
                          </View>
                          <View style={style.cardContainer}>
                            <Text style={{ fontSize: 16 }}>Date</Text>
                            <Text style={{ fontSize: 16 }}> Time </Text>
                          </View>

                          <View style={style.cardContainer}>
                            <Text style={{ marginLeft: 5, fontSize: 16 }}>{schedule.departure_date.slice(0, 10)} </Text>
                            <Text style={{ marginRight: 5, fontSize: 16 }}>{schedule.departure_time.slice(0, 10)} - {schedule.arrive_time} </Text>
                          </View>
                        </TouchableOpacity>
                      </Card>

                    )
                  })}
                </View>
              </ScrollView>


            </View>
          </View>

        </>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    data: state.dataSchedule,
    scheduleUser: state.GetSchedules,
  }
}

export default connect(mapStateToProps, { dataSchedule, Purchase, UserDetail, CreatePayment })(Order);