import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableHighlight, TouchableOpacity, Image } from 'react-native';

export default function App() {


    const [food, setFood] = useState('Candy')
    const [count, setCount] = useState(0)
    const [cat, setCat] = useState('初始值是小貓咪')
    const [validCod, setvalidCod] = useState('')

    // function 寫法
    const changeFood = () => {
        setFood('noddles')
        console.log('按到changeFood了')
    }

    const changeCount = () => {
        setCount(count + 1)
        console.log('按到changeCount了')
    }

    const printButton = () => {
        console.log('按到Button了！')
    }

    const printOpacity = () => {
        console.log('按到Opacity了')
    }

    const printHighlight = () => {
        console.log('按到Highlight')
    }


    return (
        <View style={styles.container}>
            <Text>{cat}</Text>
            <Text>{food}</Text>
            <Text>計數器有{count}個！</Text>
            <Button
                title='改變貓咪'
                onPress={() => setCat('變成老虎了')}
            />
            <Button
                title='change food'
                onPress={() => changeFood()}
            />
            <Button
                title='change count'
                onPress={() => changeCount()}
            />
            <TextInput
                style={{ height: 30, width: 300, borderRadius: 0, borderColor: 'darkgray', borderWidth: 5, backgroundColor: 'gray', color: 'white', fontSize: 28, textAlign: 'center' }}
                onChangeText={(text) => setvalidCod(text)}
                value={validCod}
                maxLength={10}
                placeholder='Please type numbers'
                keyboardType={'numeric'}
                secureTextEntry={true}
                editable={true}
                autoFocus={true}
            />

            <Button
                title={'點點看'}
                onPress={() => printButton()}
                color='red'
            />

            <TouchableOpacity onPress={() => printOpacity()}>
                <Text>點Opacity</Text>
                <Image
                    style={{ width: 100, height: 100 }}
                    source={require('./src/img/123.png')}
                />
            </TouchableOpacity>

            <TouchableHighlight onPress={() => printHighlight()}>
                <Image
                    style={{ width: 100, height: 100 }}
                    source={{ uri: 'https://m.skm.com.tw/upage/2020/topselling/images/button.png' }}
                />
            </TouchableHighlight>


            <StatusBar style="auto" />
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
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


