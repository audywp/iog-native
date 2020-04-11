import React, { Component } from 'react'
import { NavigationContainer } from "@react-navigation/native";
import StackTabs from './src/Components/StackTabs'
import { Provider } from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'
import {store, persistor} from './src/Redux/Store'



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (

      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <NavigationContainer>
            <StackTabs />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    )
  }
}

export default App;