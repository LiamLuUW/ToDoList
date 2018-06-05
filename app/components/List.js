import React, { Component, PropTypes } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { CheckBox } from "react-native-elements";
import Swipeout from 'react-native-swipeout'

export default class List extends Component {
  onCheckBoxChanged = function(index) {
    const { onItemComplete } = this.props;
    console.log("index is " + index);
    onItemComplete(index);
  };

  deleteClicked = function(index){
    const {onRemoveItem} = this.props;
    onRemoveItem(index);
  };

  renderItem = (item, i) => {
    var swipeButtons = [
      {
        text: "Delete",
        underlayColor: "red",
        onPress: ()=>{this.deleteClicked(i)}
      }
    ];

    console.log(item);
    return (
      
      <Swipeout left={swipeButtons}>
        <CheckBox
          key={i}
          title={item.text}
          checked={item.completed}
          onPress={() => this.onCheckBoxChanged(i)}
        />
      </Swipeout>
    );
  };

  render() {
    const { list } = this.props;
    console.log(list);
    /*var toDoList = [];
     list.forEach(((item)=>{
      toDoList.push(item.text);
    }))*/

    return <View>
    
    {list.map(this.renderItem)}
    
    </View>;
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "whitesmoke",
    marginBottom: 5,
    padding: 15
  }
});
