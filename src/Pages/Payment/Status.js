import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, RefreshControl, SafeAreaView, ScrollView } from 'react-native'
import { Image } from 'react-native-elements'
import { Button } from 'native-base'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { GetPayment, ValidationPayment, TopUp, UpdatePayment } from '../../Redux/Actions/User/TopUp'
import { UserDetail } from '../../Redux/Actions/User/UserDetail'
import { connect } from 'react-redux'
import AsyncStorage from '@react-native-community/async-storage'
import LoadingSreen from '../../Components/LoadingScreen'

function wait(timeout) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

const Status = (props) => {
  const [refreshing, setRefreshing] = useState(false);
  const [Loading, setLoading] = useState(true)

  useEffect(() => {
    getValidation()
    console.log(props)
  }, [getValidation])

  const getValidation = async () => {
    try {
      await props.ValidationPayment(props.route.params || props.indomaret.order_id)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    console.log(props)
    props.ValidationPayment(props.indomaret.order_id || props.order.orderId.results[0].order_id)
    wait(1000).then(() => setRefreshing(false));
  }, [refreshing]);

  const goHome = async () => {
    try {
      await props.GetPayment().then(() => props.navigation.navigate('Home'))
    } catch (error) {
      console.log(error)
    }
  }
  const UpdateValidation = async () => {
    const amount = props.order.validation.gross_amount
    try {
      const id = await AsyncStorage.getItem('id')
      const data = {
        balance: amount
      }
      setLoading(true)
      await props.TopUp(data)
      await props.UserDetail(id)
      await props.UpdatePayment(props.order.idPayment.results || props.order.orderId.results[0].id)
      props.navigation.navigate('Home')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      {Loading ? <LoadingSreen /> : null}
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={styles.codePayment}>
          <Image
            resizeMode='contain'
            source={require('../../Assets/Images/indomaret.png')}
            style={{ width: 250, height: 150 }}
          />
          <Text style={{
            fontSize: 24,
            fontFamily: 'Roboto'
          }}>
            {props.order.validation && props.order.validation.payment_code}
          </Text>
        </View>
        <View style={styles.descPayment}>
          <Text style={{
            fontSize: 20,
            marginBottom: 20,
            fontFamily: 'Roboto'
          }}>
            Order Pending
        </Text>
          <Text style={{
            fontSize: 18,
            fontFamily: 'Roboto',
            textAlign: 'center'
          }}>
            your order has been processed, but not complete yet !
        </Text>
          <Text style={{
            fontSize: 18,
            fontFamily: 'Roboto',
            textAlign: 'center'
          }}>
            show this screen to teller
        </Text>
          <View style={styles.containerButton}>
            <Button
              onPress={UpdateValidation}
              disabled={props.order.validation.transaction_status === "pending" ? true : false}
              style={props.order.validation.transaction_status === "pending" ? styles.disabledButton : styles.Button}>
              <Text style={{ width: '100%', textAlign: 'center', fontFamily: 'Roboto', color: 'white', fontSize: 16 }}>Validate</Text>
            </Button>
          </View>
          <TouchableOpacity onPress={goHome}>
            <Text style={{
              fontSize: 16,
              marginTop: 20,
              color: '#3475db',
              fontFamily: 'Roboto',
              textAlign: 'center'
            }}>
              Back to home
          </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

    </SafeAreaView>
  )
}

const mapStateToProps = state => {
  return {
    indomaret: state.TopUp.data,
    order: state.TopUp
  }
}

export default connect(mapStateToProps, { GetPayment, ValidationPayment, TopUp, UserDetail, UpdatePayment })(Status)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    paddingHorizontal: 10
  },
  codePayment: {
    height: 230,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,

  },
  descPayment: {
    flex: 1,
    width: '80%',
    alignItems: 'center',
    marginTop: 20
  },
  containerButton: {
    marginTop: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
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
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
