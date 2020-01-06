import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Ex extends Component {
  render() {
    return (
      <View style={ styles.container }>
        <Example style={{borderWidth: 1}}>
          <Text>borderWidth: 1</Text>
        </Example>
      </View>
    )
  }
}

const Example = (props) => (
  <View style={ [styles.example, props.style] }>
    { props.children }
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  example: {
    marginBottom: 15
  }
});