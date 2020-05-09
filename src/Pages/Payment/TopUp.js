import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity,TextInput, Alert } from 'react-native'
import { Button, Label, Toast } from 'native-base'
import { Image, CheckBox } from 'react-native-elements'
// import AntDesign from 'react-native-vector-icons/AntDesign'

// redux
import { TopUp as topup, Indomaret, CreatePayment, ValidationPayment } from '../../Redux/Actions/User/TopUp'
import { UserDetail } from '../../Redux/Actions/User/UserDetail'
import { connect } from 'react-redux'
import AsyncStorage from '@react-native-community/async-storage'
const TopUp = (props) => {
  const [Amount, setAmount] = useState(0)
  const [checked, setChecked] = useState(false)


  const CreatePayment = async () => {
    setChecked(!checked)
    const dataPayment = {
      "payment_type": "cstore",
      "transaction_details": {
          "gross_amount": Amount,
          "order_id": `iogTravel${Date.now()}`
      },
      "customer_details": {
          "first_name": "Mr/Mrs",
          "last_name": `${props.User.data.detail && props.User.data.detail.name}`,
          "phone": `${props.User.data.detail && props.User.data.detail.phone}`
      },
      "item_details": [
      {
         "id": "item01",
         "price": Amount,
         "quantity": 1,
         "name": "Top Up"
      }
     ],
    "cstore": {
      "store": "Indomaret"
    }
  }
  await props.Indomaret(dataPayment)
  
  }
  const ProccessPayment = async () => {
    
    try {
      const order_id = await props.dataTopUP.data && props.dataTopUP.data.order_id
      const status = await props.dataTopUP.data && props.dataTopUP.data.transaction_status
      const store = await props.dataTopUP.data && props.dataTopUP.data.store
      const data = {
        name : props.User.data.detail && props.User.data.detail.name,
        orderId: order_id,
        amount: parseInt(Amount),
        store : store,
        method: 'Top Up',
        status: status
      }
      await props.CreatePayment(data)
      await props.ValidationPayment(order_id)
      props.navigation.navigate('Status Payment')
    } catch (error) {
      console.log(error)
    }
  }
  

  // useEffect (() => {
  //   getUserDetail()
  // })

  return (
    <ScrollView style={styles.container}>
      <View style = {styles.amountMethod}>
        <View>
          <Text>ENTER AMOUNT</Text>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center'
          }}>
            <Label style={{ marginLeft: 10 }}>Rp</Label>
            <TextInput 
              style={{ paddingHorizontal: 10 }}
              onChangeText = { (text) => setAmount(text) }
              placeholder='Amount'
              keyboardType='number-pad'
              value = {Amount}
              clearButtonMode
            />
          </View>
        </View>
        <View style={styles.amount}>
          <TouchableOpacity onPress={() => setAmount('49000')} style={styles.price}>
            <Text> 49.000 </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setAmount('99000')} style={styles.price}>
            <Text> 99.000 </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setAmount('199000')} style={styles.price}>
            <Text> 199.000 </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setAmount('499000')} style={styles.price}>
            <Text> 499.000 </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.PaymenyGate}>
        <Text> Payment Method </Text>
        <TouchableOpacity disabled={Amount <= 0 ? true: false} onPress={CreatePayment} style={styles.payment}>
          <Image
            source={require('../../Assets/Images/indomaret.png')}
            style={{ width: 100, height: 80 }}
            resizeMode='contain'
          />
          <Text style={{ flex: 1 }}> Indomaret </Text>
          <CheckBox
            textStyle={{ color: 'green' }}
            disabled
            checked={checked}
          />
        </TouchableOpacity>
        <View style={styles.containerButton}>
          <Button onPress={ProccessPayment} disabled={!checked} style={checked && Amount >= 0 ? styles.Button : styles.disabledButton}>
            <Text style={{ width: '100%', textAlign: 'center', fontFamily: 'Roboto', color: 'white', fontSize: 16 }}>Proccess</Text>
          </Button>
        </View>
      </View>
    </ScrollView>
  )
}

const mapStateToProps = (state) => ({
  User: state.UserDetail,
  dataTopUP: state.TopUp
})

const mapDispatchToProps = {
  topup, UserDetail, Indomaret, CreatePayment, ValidationPayment
}

export default connect(mapStateToProps, mapDispatchToProps) (TopUp)

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10
  },
  amountMethod: {
    backgroundColor: 'white',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    borderRadius: 10,
    padding: 10,
    marginTop: 10
  },
  amount: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 15
  },
  price: {
    borderRadius: 10,
    width: 60,
    paddingVertical: 15,
    alignItems: 'center',
    shadowColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 1,
  },
  PaymenyGate: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    marginTop: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    borderRadius: 10,
    borderBottomEndRadius: 0,
    borderBottomLeftRadius: 0
  },
  payment: {
    flexDirection: 'row',
    alignItems:'center',
  },
  containerButton: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'white'
  },
  Button: {
    paddingVertical: 15,
    backgroundColor: 'red',
    alignItems: 'center',
    width: '90%',
    borderRadius: 5,
    backgroundColor: '#3475db',
    textAlign: 'center'
  },
  disabledButton: {
    paddingVertical: 15,
    alignItems: 'center',
    width: '90%',
    borderRadius: 5,
    textAlign: 'center',
    backgroundColor: '#ddd'
  }
})