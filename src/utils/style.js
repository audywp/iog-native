import {StyleSheet} from 'react-native'


export const buttonStyle = StyleSheet.create({
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
    backgroundColor: '#c3dbf5',
    
  },
  Submit: {
    borderTopEndRadius: 40,
    borderTopLeftRadius: 40,
    height:100,
    backgroundColor: '#3490db',
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