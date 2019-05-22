import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Album } from "./src/Album";

export default class App extends React.Component {
  render() {
    return <Album />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
