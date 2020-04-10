import React, { Component } from 'react'
import { NavigationContainer } from "@react-navigation/native";
import StackTabs from './src/Components/StackTabs'
import BottomTabs from './src/Components/BottomTabs'
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (

      <>
        <Header style={{backgroundColor:'#3498db'}}>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>IOG</Title>
          </Body>
          <Right>
            <Button transparent>
              
            <MaterialIcons name='shopping-basket' size={20} color={'white'} />
            </Button>
            <Button transparent>
              
              <Icon name='menu' />
            </Button>
            
          </Right>
        </Header>
        <NavigationContainer> 
          <BottomTabs />
        </NavigationContainer>
      </>
    )
  }
}

export default App;