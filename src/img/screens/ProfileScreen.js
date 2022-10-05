import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';


export default function ProfileScreen() {


  return (
    <View style={styles.container}>

      <Text>給我過來</Text>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'black'
  },
  secondText: {
    color: 'green'
  },
  thirdText: {
    color: 'purple'
  }


});


