import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';


export default function HomeScreen(props) {


  return (
    <View style={styles.container}>

      <Text>學長你好</Text>
      <Button
        title='go to next page'
        onPress={() => props.navigation.push('HomeDetailScreen')}
      />
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


