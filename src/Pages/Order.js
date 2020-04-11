import React, { Component } from 'react'
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native'
import {Button, Picker, Form, Icon, DatePicker} from 'native-base'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const buttonStyle = StyleSheet.create({
  Button: {
    width: '60%',
    height: 40, 
    borderRadius: 6,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
    justifyContent: "center",
  },
  Header: {
    height: 100,
    backgroundColor: '#3498db',
    justifyContent: "center",
    alignItems:"center",
    borderBottomEndRadius: 40,
    borderBottomLeftRadius: 40
  },
  Body: {
    flex: 1,
    backgroundColor: '#3490db',
    
  },
  Submit: {
    borderTopEndRadius: 40,
    borderTopLeftRadius: 40,
    height:100,
    backgroundColor: 'white',
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  }
}) 





class Order extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      selectedBus: "bus0",
      selectedRoutesFrom: 'Route0',
      selectedRoutesTo: 'to0',
      chosenDate: new Date()
     };
    this.setDate = this.setDate.bind(this);
  }
  onValueChangeBus(value: string) {
    this.setState({
      selectedBus: value
    });
  }
  onValueChangeRoutesFrom(value: string) {
    this.setState({
      selectedRoutesFrom: value
    });
  }
  onValueChangeRoutesTo(value: string) {
    this.setState({
      selectedRoutesTo: value
    });
  }

  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }


  render() {
    return (
      <>
        
        <View style = {buttonStyle.Body}>
          <Form style={{flex: 1, justifyContent: "space-between"}}>
            <View style = {buttonStyle.Header}>
              <Text style= {{ fontSize: 40, color: 'white', marginBottom: 10 }} >IOG</Text>
            </View>
            <View>
              <View style={{alignItems: "center", paddingVertical: 20}}>
                <Text style= {{ color: 'white', marginBottom: 10 }}>Choose Your Bus</Text>
                <View style = {buttonStyle.Button}>
                  <Picker
                    mode="dropdown"
                    selectedValue={this.state.selectedBus}
                    onValueChange={this.onValueChangeBus.bind(this)}>
                    <Picker.Item label="AM Shantika" value="bus1" />
                    <Picker.Item label="King" value="bus2" />
                    <Picker.Item label="Alegra" value="bus3" />
                    <Picker.Item label="Damri" value="bus0" color='white' />
                  </Picker>
                </View>
              </View>
              <View style={{alignItems: "center"}}>
                  <Text style= {{ color: 'white', marginBottom: 10 }}>Choose Your Routes</Text>
                <View style = {buttonStyle.Button}>
                  <Picker
                    mode="dropdown"
                    selectedValue={this.state.selectedRoutesFrom}
                    onValueChange={this.onValueChangeRoutesFrom.bind(this)}>
                    <Picker.Item label="Damri" value="Route1" />
                    <Picker.Item label="King" value="Route2" />
                    <Picker.Item label="Alegra" value="Route3" />
                    <Picker.Item label="AM Shantika" value="Route4" />
                    <Picker.Item color='white' label="From" value="Route0" />
                  </Picker>
                </View>

                <View style = {buttonStyle.Button}>
                  <Picker
                    
                    mode="dropdown"
                    selectedValue={this.state.selectedRoutesTo}
                    onValueChange={this.onValueChangeRoutesTo.bind(this)}>
                    <Picker.Item label="Damri" value="to1" />
                    <Picker.Item label="AM Shantika" value="to2" />
                    <Picker.Item label="King" value="to3" />
                    <Picker.Item label="Alegra" value="to4" />
                    <Picker.Item color='white' label='To' value="to0"  />
                  </Picker>
                </View>
              </View>
              <View style={{alignItems: "center",paddingVertical: 20}}>
                <View style = {buttonStyle.Button}>
                  <DatePicker
                    defaultDate={new Date(2020, 4, 1)}
                    minimumDate={new Date(2018, 1, 1)}
                    maximumDate={new Date(2030, 12, 31)}
                    locale={"en"}
                    timeZoneOffsetInMinutes={undefined}
                    modalTransparent={false}
                    animationType={"fade"}
                    androidMode={"default"}
                    placeHolderText="Select date"
                    textStyle={{ color: "white" }}
                    placeHolderTextStyle={{ color: "#fff" }}
                    onDateChange={this.setDate}
                    disabled={false}
                    />
                </View>
                    <Text style= {{ color: 'white', marginTop: 10 }}>
                      Date: {this.state.chosenDate.toString().substr(4, 12)}
                    </Text>
              </View>
            </View>
            <View style = {buttonStyle.Submit}> 
              <TouchableOpacity>
                <MaterialCommunityIcons style={{
                  elevation: 2,
                  shadowOpacity: 0.5,
                  textShadowColor: '#3499db',
                  textShadowRadius: 10,
                  textShadowOffset:{width: 0,height: 0}
                }}
                name='arrow-right-bold-circle' size={80} color={'#3490db'} /> 
              </TouchableOpacity>
            </View>
          </Form>
        </View>
        
      </>
    );
  }
}

export default Order;