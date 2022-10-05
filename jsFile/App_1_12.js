import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableHighlight, TouchableOpacity, Image } from 'react-native';

export default function App() {

    const [validCode, setvalidCode] = useState('')
    const getNumber = () => {
        if (validCode === '1234') {
            return <Text style={{ color: 'yellow' }}>輸入成功</Text>
        } else {
            return <Text style={{ color: 'red' }}>請輸入密碼</Text>
        }
    }

    return (
        <View style={styles.container}>

            <TextInput
                maxLength={4}
                style={{ height: 50, width: 300, borderRadius: 0, borderColor: 'darkgray', backgroundColor: 'white', color: 'black', fontSize: 28, textAlign: 'center' }}
                onChangeText={(text) => setvalidCode(text)}
                keyboardType={'numeric'}
                value={validCode}
            />

            {getNumber()}

            {validCode === '1234' ? <Text style={{ color: 'yellow' }}>輸入成功囉！</Text> : <Text style={{ color: 'red' }}>白痴輸入錯誤</Text>}

            <TouchableOpacity style={{ backgroundColor: '#00aeef', borderRadius: 20, width: 300, height: 40, justifyContent: 'center', margin: 20 }}>
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


