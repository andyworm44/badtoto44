import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableHighlight, TouchableOpacity, Image } from 'react-native';

export default function App() {


    const stopWatch = './src/img/stopwatch.png'
    const clock = './src/img/clock-circular-outline.png'
    const stopWatchBG = './src/img/IMG_8529.jpg'
    // const clockBG = './src/img/IMG_8530.jpg'

    const [tabImg, setTabImg] = useState(require('./src/img/IMG_8530.jpg'))


    const change = () => {
        setTabImg(require('./src/img/IMG_8529.jpg'))
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.container}>
                <Image
                    style={{ width: 350, height: 600, margin: 10 }}
                    source={tabImg}
                />
            </View>

            <View style={styles.container2}>

                <TouchableOpacity >
                    <Image style={{ width: 50, height: 50, margin: 5 }}
                        source={require(stopWatch)} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => change()} >
                    <Image style={{ width: 50, height: 50, margin: 5 }}
                        source={require(clock)} />
                </TouchableOpacity>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: 'black',
        alignItems: 'flex-end',
        justifyContent: 'space-evenly',
        flexDirection: 'row'
    },
    container2: {
        // flex: 1,
        backgroundColor: 'lightgrey',
        alignItems: 'flex-end',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        height: 60
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


