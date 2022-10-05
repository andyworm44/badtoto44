import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableHighlight, TouchableOpacity, Image } from 'react-native';

export default function App() {

    const [validCode, setvalidCode] = useState('')

    return (
        <View style={styles.container}>

            <TextInput
                maxLength={10}
                style={{ height: 50, width: 300, borderRadius: 0, borderColor: 'darkgray', backgroundColor: 'white', color: 'black', fontSize: 28, textAlign: 'center' }}
                onChangeText={(text) => setvalidCode(text)}
                keyboardType={'numeric'}
                value={validCode}

            />

            <Text style={{ color: 'white', margin: 20 }}>您輸入的手機號碼是：{validCode}</Text>


            <TouchableOpacity style={{ backgroundColor: '#00aeef', borderRadius: 20, width: 300, height: 40, justifyContent: 'center' }}>
                <Text style={{ color: 'white', textAlign: 'center', fontSize: 25 }}>
                    Enter
                </Text>
            </TouchableOpacity>


        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
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


