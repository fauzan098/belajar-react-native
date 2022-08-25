import { StatusBar } from "expo-status-bar";
import React from "react";
import { TouchableOpacity, View } from "react-native";

export default function Event() {
    function Hello() {
        alert("hello world")
    }

    return (
        <View>
            <StatusBar/>
            <TouchableOpacity onPress={Hello}>klik here</TouchableOpacity>
            <TouchableOpacity onPress={()=> alert("hello guys")}>klik</TouchableOpacity>
        </View>
    )
}