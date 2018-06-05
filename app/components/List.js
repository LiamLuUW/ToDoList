import React, { Component, PropTypes } from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import { CheckBox } from 'react-native-elements'


export default class List extends Component {

  // constructor(props){
  //   super(props)
  //   this.state = {
  //     checked: false,
  //   }
  // }

  onCheckBoxChanged = function(index){
    const {onItemComplete} = this.props;
    console.log("index is " + index );
    onItemComplete(index);
    //this.setState({checked: !this.state.checked})
  }

  renderItem = (item, i) => {
    console.log(item);
    return (
      <CheckBox style={styles.item}
      key={i}
      title={item.text}
      checked={item.completed}
      onPress={()=>this.onCheckBoxChanged(i)}
      />
      
    )
  }

  render() {
    const {list} = this.props
    console.log(list)
    /*var toDoList = [];
     list.forEach(((item)=>{
      toDoList.push(item.text);
    }))*/
    
    return (
      <View>
        {list.map(this.renderItem)}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'whitesmoke',
    marginBottom: 5,
    padding: 15,
  },
})

