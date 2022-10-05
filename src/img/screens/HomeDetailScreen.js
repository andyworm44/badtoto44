import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';


export default function HomeDetailScreen(props) {


    return (
        <View style={styles.container}>

            <Text>學長你好XXX</Text>
            <Button
                title='go back'
                onPress={() => props.navigation.pop()}
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


