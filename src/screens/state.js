import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function State() {
    // init state
    const [counter, setCounter] =useState(0)

    //create function add
    function Add() {
        return setCounter(counter +1)
    }

    //create function less
    function Less(){
        if (counter > 0){
            return setCounter(counter - 1)
        }
    }

    return (
        <View>
            <StatusBar />
            <Text>{counter}</Text>
            <TouchableOpacity onPress={Add} >add</TouchableOpacity>
            <TouchableOpacity onPress={Less} >less</TouchableOpacity>
        </View>
    )
}