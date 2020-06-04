import React, { useState } from 'react'
import { StyleSheet, Text, View, } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { Button } from 'native-base'
const Verification = (props) => {

  return (
    <View style={styles.mainContainer}>
      <View style={styles.Circle1} />
      <View style={styles.Circle2} />
      <View style={styles.ContentContainer}>
        <View style={styles.container1} >
          <FontAwesome name='hand-o-right' color='#3498db' size={100} />
          <Entypo name='newsletter' color='#3498db' size={150} />
        </View>
        <View style={styles.container2}>
          <Text style={{
            fontFamily: 'Roboto',
            fontSize: 30,
            marginBottom: 10
          }}>Thanks!</Text>
          <Text style={{
            fontFamily: 'Roboto',
            fontSize: 30,
            marginBottom: 10
          }}>Now check your email.</Text>
          <Text style={{
            fontFamily: 'Roboto',
            color: '#777',
            marginBottom: 10
          }}>We sent an email to</Text>

          <Text style={{
            fontFamily: 'Roboto',
            marginBottom: 10
          }}>ahskjdhwja@gmail.com</Text>
          <Text style={{
            fontFamily: 'Roboto',
            color: '#777',
            marginBottom: 10
          }}>to verify your acount</Text>

          <View style={{ marginTop: 20, justifyContent: 'center' }}>
            <Button
              onPress={() => props.navigation.navigate('Login')}
              style={{
                justifyContent: 'center',
                backgroundColor: '#3498db',
                alignItems: 'center',
                borderRadius: 8,
                width: 145,
              }}>
              <Text style={{ color: 'white', fontSize: 16, fontFamily: 'Roboto' }}> Go to login page</Text >
            </Button>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Verification

const styles = StyleSheet.create({
  Circle1: {
    position: 'absolute',
    top: 40,
    left: -220,
    width: 400,
    height: 400,
    borderRadius: 200,
    backgroundColor: 'white'
  },
  Circle2: {
    position: 'absolute',
    top: 160,
    right: -250,
    width: 400,
    height: 400,
    borderRadius: 200,
    backgroundColor: 'white'
  },
  container1: {
    position: 'absolute',
    top: 120,
    right: 35,
    flexDirection: 'row',
    width: 280,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  container2: {
    position: 'absolute',
    top: 320,
    left: 35,

  },
  mainContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    position: 'relative'
  },
})
