import React, { Component } from 'react'
import { NavigationContainer } from "@react-navigation/native";
import BottomTabs from './src/Components/BottomTabs'
class Bottomtabs extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <NavigationContainer> 
        <BottomTabs />
      </NavigationContainer>
    );
  }
}

export default Bottomtabs;