import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return(
    <View style={[styles.container, {flexDirection:'row'}]}>
      <View style = {[styles.box, {backgroundColor: 'powderblue'}]}>
        <Text style={[styles.text]}>Square 1</Text>
      </View>
      <View style = {[styles.box, {backgroundColor: 'skyblue'}]}>
        <Text style={[styles.text]}>Square 2</Text>
      </View> 
      <View style = {[styles.box, {backgroundColor: 'steelblue'}]}>
        <Text style={[styles.text]}>Square 3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1, 
    padding:20,
    backgroundColor: 'aliceblue',
  },
  box: {
    width: 100,
    height: 100,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop:250,
    marginLeft:1,
    marginRight:10,
  },
  text:{
    textAlign:'center',
    color:'white',
    paddingTop: 35,
    paddingLeft: 20,
  }
});
