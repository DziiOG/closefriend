import 'react-native-gesture-handler'
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Root from './src/main';
import axios from 'axios';




export default function App() {
  return (
    <View style={styles.container}>
        <Root {...this.props} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


//axios.defaults.baseURL = 'https://us-central1-halo-84fb8.cloudfunctions.net/api';


axios.defaults.baseURL = 'https://us-central1-closefriend-1333a.cloudfunctions.net/api';

