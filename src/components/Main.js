import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  TextInput,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import {connect} from 'react-redux';
import {Button, Header, Card} from './common';
import {addTodo, removeTodo} from '../actions';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
  }
  addTodo() {
    if (this.state.inputValue.length > 0) {
      this.props.addTodo(this.state.inputValue);
      console.log(this.state.inputValue);
      this.setState({inputValue: ''});
    } else {
      console.log("empty todo");
    }
  }
  removeTodo(id) {
    this.props.removeTodo(id);
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'rgb(250,250,250)'}}>
        <StatusBar backgroundColor="rgba(0,0,0,0)" translucent/>
        <Header headerText="To Do"/>
        <ScrollView>
          <View style={styles.container}>
            <TextInput
              style={styles.textInputStyle}
              underlineColorAndroid="black"
              placeholder="Add New ToDo"
              autoCorrect={false}
              value={this.state.inputValue}
              onChangeText={(text) => this.setState({inputValue: text})}
              onSubmitEditing={() => {this.addTodo()}}
            />
            <View style={{width: Dimensions.get('window').width-20}}>
              {this.props.todo.length > 0 ?
               <View>
                 {this.props.todo.map((todo) => {
                   return (
                    <Card key={todo.id}>
                      <View style={{flexDirection: 'row'}}>
                        <Text
                          style={{color: '#333', fontSize: 15 ,paddingTop: 15, paddingBottom: 15, flex: 0.95}}
                        >
                         {todo.text}
                        </Text>
                        <TouchableOpacity onPress={() => {this.removeTodo(todo.id)}} style={{justifyContent: 'center'}}>
                          <Text style={{paddingLeft: 7,paddingTop: 2,fontSize: 12, flex: 0.05,borderWidth: 1, borderRadius: 10, width: 22, justifyContent: 'center'}}>
                            X
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </Card>
                    )
                 })}
               </View>
              :
              null
              }
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 60
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#444'
  },
  statusBar: {
    position: 'absolute'
  },
  textInputStyle: {
    width: Dimensions.get('window').width,
    alignItems: 'center',
    color: 'black',
    fontSize: 16
  }
});

const mapStateToProps = (state) => {
  console.log("todo  ",state.list.todo);
  return {
    todo: state.list.todo
  };
};

export default connect(mapStateToProps, {addTodo, removeTodo})(Main);
