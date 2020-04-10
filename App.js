import React, { Component } from 'react'
import { NavigationContainer } from "@react-navigation/native";
import StackTabs from './src/Components/StackTabs'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (

      <>
        <NavigationContainer>
          <StackTabs />
        </NavigationContainer>
      </>
    )
  }
}

export default App;