import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native"

export default function From() {
    return (
        <View style={style.container}>
            <StatusBar/>
            <Text style={style.header}>sign in</Text>

            <Text style={style.labelText}>email</Text>
            <TextInput style={style.textInput}/>

            <Text style={style.labelText}>password</Text>
            <TextInput style={style.textInput}/>
            
            <TouchableOpacity style={style.button}>
                <Text>sign in</Text>
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: "lime"
    },
    header: {
        color: 'white'
    }
})