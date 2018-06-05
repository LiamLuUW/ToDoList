import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { TextInput, View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  input:{
    padding: 15,
    height:50,
    
  },
  line:{
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
  }

})

export default class Input extends Component {
  
  state = {
    text: '',
  }

  onChangeText = (text) => {
      this.setState({text})
  }

  onSubmitEditing = function(){
    const {addToDo} = this.props
    const {text} = this.state
    if(!text)return;
    addToDo(text);
    //alert("Saved successfully!")
    
  }

  render() {
    const {placeHolder} = this.props
    const {text} = this.state

    return(
      <View> 
        <TextInput style={styles.input}
        value={text}
        placeholder={placeHolder}
        onChangeText={this.onChangeText}
        onSubmitEditing={this.onSubmitEditing.bind(this)}/>
        <View style={styles.line}/>
      </View>
    )
  }
}
