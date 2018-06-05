import React, { Component, PropTypes } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  footContainer:{
    padding: 15,
    borderRadius: 4,

  },
  footer: {
    color: "red",
    textAlign: "center",
  },
  line:{
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
  }
});

export default class Footer extends Component {
  render() {
    const { children } = this.props;
    return(
      <View>
      <View style = {styles.line}/>
      <TouchableOpacity style={styles.footContainer}>
        <Text style={styles.footer}>{children}</Text>
      </TouchableOpacity>
      </View>
    )
  }
}
