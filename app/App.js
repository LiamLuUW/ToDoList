import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { View, ScrollView, StyleSheet, TextInput, Text } from "react-native";
import { connect } from "react-redux";
//import { Actions } from 'react-native-router-flux'

import { actionCreators } from "./redux/todoListRedux";
import Title from "./components/Title";
import Footer from "./components/Footer";
import Input from "./components/Input";
import List from "./components/List";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between"
  }
});

const mapStateToProps = state => (console.log(state),{
  items: state
});

class App extends Component {
  // static propTypes = {
  //   items: PropTypes.array.isRequired,
  //   dispatch: PropTypes.func.isRequired,
  // }

  onAddTodo = text => {
    const { dispatch } = this.props;

    dispatch(actionCreators.addItem(text));
  };

  onItemComplete = index => {
    const { dispatch } = this.props;
    dispatch(actionCreators.completeItem(index));
  };

  onDeleteToDo = index => {
    const {dispatch} = this.props;
    dispatch(actionCreators.removeItem(index));
  }

  render() {
    const { items } = this.props;
    //console.log(items);
    return (
      <View style={styles.container}>
        <View>
          <Title>Todo List</Title>
          <Input
            placeHolder="Please type your todo here"
            addToDo={this.onAddTodo.bind(this)}
          />
          <ScrollView>
            <List
              list={items}
              onItemComplete={this.onItemComplete.bind(this)}
              onRemoveItem = {this.onDeleteToDo.bind(this)}
            />
          </ScrollView>
        </View>
        <Footer>Remove Complete Items</Footer>
      </View>
    );
  }
}

export default connect(mapStateToProps)(App);
