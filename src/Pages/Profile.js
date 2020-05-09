import React, { Component } from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'
import {Container, Item, Input } from 'native-base'
import LinearGradient from 'react-native-linear-gradient'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
const style = StyleSheet.create({
  header: {
    height: 220,
    flexDirection: 'row',
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
  body: {
    flex: 1,
    marginTop: 5,
    paddingVertical: 10,
    justifyContent: "space-evenly",
    paddingHorizontal: 15
  },
  linearGrad: {
    width: '100%',
    height: 550,
    position: "absolute",
    top: -340,
    left: 40,
    borderRadius: 60,
    transform: [{
      rotate: 42,
    }]
  }
})

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <>
        <Container>
        <LinearGradient colors={['#4096EB', '#53B1E6', '#6CD0DF']} style={style.linearGrad} >
          
        </LinearGradient>
          <View style = {style.header}>
            <View>
              <Text style={{ fontSize: 25, color: 'white' }}>Audy Pratama</Text>
              <Text style={{marginTop: 9, color: 'white'}}>audypratama@gmail.com</Text>
              <Text style={{marginTop: 9, color: 'white'}}>+62812345678</Text>
            </View>
            <View>
              <View>
                <Image source={require('../Assets/Images/person1.jpg')} style={{width: 130, height: 130, borderRadius: 80, marginTop: 15}} />
                <MaterialCommunityIcons name='circle-edit-outline' color={'#4096EB'} size={25} style={{position: "absolute", top: 115, right: 10}} />
              </View>
            </View>
          </View>

          <View style = {style.body}>
            <Text style={{fontSize: 24}}>Account</Text>
            <Item disabled>
              <MaterialIcons name='lock' size={18} color={'#333'} />
              <Input disabled placeholder='Change Password' />
              <MaterialIcons name='keyboard-arrow-right' size={28} color={'#666'} />
            </Item>
            <Item disabled>
              <MaterialIcons name='payment' size={18} color={'#333'} />
              <Input disabled placeholder='Order' />
              <MaterialIcons name='keyboard-arrow-right' size={28} color={'#666'} />
            </Item>
            <Item disabled>
              <MaterialIcons name='edit' size={18} color={'#333'} />
              <Input disabled placeholder='Edit Profile' />
              <MaterialIcons name='keyboard-arrow-right' size={28} color={'#666'} />
            </Item>
            <Item disabled>
              <MaterialCommunityIcons name='newspaper' size={18} color={'#333'} />
              <Input disabled placeholder='History' />
              <MaterialIcons name='keyboard-arrow-right' size={28} color={'#666'} />
            </Item>
            <Item disabled>
              <MaterialCommunityIcons name='forwardburger' size={18} color={'#333'} />
              <Input disabled placeholder='Other' />
              <MaterialIcons name='keyboard-arrow-right' size={28} color={'#666'} />
            </Item>

          </View>
        </Container>
      </>
    );
  }
}

export default Profile;