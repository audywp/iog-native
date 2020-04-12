import React, { Component } from 'react'
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native'
import {Button, Picker, Form, Icon, DatePicker} from 'native-base'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { buttonStyle } from '../utils/style'






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
              <Text style= {{ fontSize: 40,  marginBottom: 10 }} >IOG</Text>
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
                name='arrow-right-bold-circle' size={80} color={'#fff'} /> 
              </TouchableOpacity>
            </View>
          </Form>
          
        </View>
        
      </>
    );
  }
}

export default Order;