import React, { Component } from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'

//redux
import { ValidationPayment, GetPayment, GetPaymentByOrderId } from '../../Redux/Actions/User/TopUp'
import { connect } from 'react-redux'

class Pending extends Component {

  constructor(props) {
    super(props)
    this.state = {
      dataPayment: []
    }
  }

  checkValidation = async (id, order_id) => {
    await this.props.ValidationPayment(order_id)
    await this.props.GetPaymentByOrderId(id).then(() => {
      this.props.navigation.navigate('Status Payment', order_id)
    })
  }

  componentDidMount = async () => {
    await this.props.GetPayment()
  }

  render() {
    return (
      <ScrollView directionalLockEnabled style={styles.container}>
        {this.props.history.results && this.props.history.results.map((result, i) => {
          return (
            <TouchableOpacity disabled={result.status === 'Done' ? true : false} key={i} onPress={() => this.checkValidation(result.id, result.order_id)}>
              <View style={result.status === 'Done' ? styles.DonePayment : styles.datePayment}>
                <Text>{result.status}</Text>
              </View>

              <View style={styles.descPayment}>

                <View style={styles.descLeft}>
                  <View style={styles.textDesc}>
                    <Text style={styles.title}>Name : </Text>
                    <Text> {result.name} </Text>
                  </View>
                  <View style={styles.textDesc}>
                    <Text style={styles.title}>Method : </Text>
                    <Text> {result.method} </Text>
                  </View>
                  <View style={styles.textDesc}>
                    <Text style={styles.title}>Amount : </Text>
                    <Text> {result.amount} </Text>
                  </View>
                  <View style={styles.textDesc}>
                    <Text style={styles.title}>Order Id : </Text>
                    <Text> ... {result.order_id.slice(15, 20)} </Text>
                  </View>
                </View>

                <View style={styles.border}></View>

                <View style={styles.descRight}>
                  <View style={styles.textDesc}>
                    <Text style={styles.title}>Status : </Text>
                    <Text> {result.status} </Text>
                  </View>
                  <View style={styles.textDesc}>
                    <Text style={styles.title}>Payment : </Text>
                    <Text> {result.store} </Text>
                  </View>
                  <View style={styles.textDesc}>
                    <Text style={styles.title}>Date : </Text>
                    <Text> {result.created_at.slice(0, 10)} </Text>
                  </View>
                </View>

              </View>
            </TouchableOpacity>
          )
        })}


      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    history: state.TopUp.payment
  }
}

const mapDispatchToProps = {
  ValidationPayment, GetPayment, GetPaymentByOrderId
}

export default connect(mapStateToProps, mapDispatchToProps)(Pending)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  datePayment: {
    backgroundColor: '#F2B452',
    width: 80,
    alignItems: 'center',
    paddingVertical: 4,
    borderTopLeftRadius: 5,
    borderTopEndRadius: 5
  },
  DonePayment: {
    backgroundColor: '#32ff7e',
    width: 80,
    alignItems: 'center',
    paddingVertical: 4,
    borderTopLeftRadius: 5,
    borderTopEndRadius: 5
  },

  descPayment: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
    height: 130,
    borderTopEndRadius: 20,
    borderBottomLeftRadius: 20,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  border: {
    height: 110,
    borderWidth: 0.6,
    borderColor: '#ddd'
  },
  descLeft: {
    justifyContent: 'space-between',
    height: 85,
    flex: 1,
    alignItems: 'flex-start',
    marginRight: 20
  },
  descRight: {
    justifyContent: 'space-between',
    height: 85,
    flex: 1,
    alignItems: 'flex-start',
    marginLeft: 20
  },
  textDesc: {
    flexDirection: 'row',
  },
  title: {
    fontWeight: 'bold',
  }
})
