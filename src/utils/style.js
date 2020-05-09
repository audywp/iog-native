import {StyleSheet} from 'react-native'


export const buttonStyle = StyleSheet.create({
  Button: {
    width: '60%',
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
    height: 50,
    marginBottom: 10,
    justifyContent: "center",
    alignItems:"center",
    borderBottomEndRadius: 40,
    borderBottomLeftRadius: 40
  },
  Body: {
    flex: 1,
  },
  Submit: {
    backgroundColor: 'white',
    paddingVertical: 8,
    width: '80%',
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