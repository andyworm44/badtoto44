import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableHighlight, TouchableOpacity, Image } from 'react-native';

export default function App() {

    const [count, setCount] = useState(0)

    const add = () => {
        setCount(count + 100)
    }

    const resetcount = () => {
        setCount(count - count)
    }

    return (
        <View style={styles.container}>

            <TouchableOpacity onPress={() => add()} style={{ width: 300, height: 40, backgroundColor: 'orange', borderRadius: 20, justifyContent: 'center' }}>
                <Text style={{ textAlign: 'center', fontSize: 25, color: 'white' }}>免費領取100金幣！</Text>
            </TouchableOpacity>

            <TouchableHighlight onPress={() => resetcount()} style={{ width: 300, height: 40, backgroundColor: 'orange', borderRadius: 20, justifyContent: 'center', margin: 20 }}>
                <Text style={{ textAlign: 'center', fontSize: 25, color: 'white' }}>把錢全部捐出去 👻</Text>
            </TouchableHighlight>

            <Text>你現在有{count}金幣！</Text>

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
        fontSize: 30,
        textAlign: 'center',
        color: 'gray'
    },
    secondText: {
        color: 'green'
    }

});


