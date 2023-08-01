import {Button, Text, View} from 'react-native';
import React, {Component} from 'react';

export class CounterClass extends Component {
  state = {
    count: 0,
  };

  increment = () => {
    this.setState(prevState => ({count: prevState.count + 1}));
  };

  decrement = () => {
    this.setState(prevState => ({count: prevState.count - 1}));
  };

  reset = () => {
    this.setState({count: 0});
  };

  render() {
    return (
      <View>
        <Text style={{fontSize: 25, alignSelf: 'center'}}>
          Count: {this.state.count}
        </Text>
        <Button title="Increment" onPress={this.increment} />
        <Button title="Decrement" onPress={this.decrement} />
        <Button title="Reset" onPress={this.reset} />
      </View>
    );
  }
}

export default CounterClass;
