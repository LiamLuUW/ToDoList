import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  background:{
   backgroundColor: 'skyblue',
   padding: 15,
  },
  title:{
    color:'white',
    textAlign: 'center',
  },
})

export default class Title extends Component {


  render() {
    const {children} = this.props;
    return (<View style={styles.background}>
            <Text style={styles.title}>{children}</Text>
          </View>
    )
  }
}