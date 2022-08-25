import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Image } from "react-native";
import List from '../component/list'

export default function props() {
    // create variable to insert link image
    // const image = 

    return (
        <View>
            <StatusBar />
            <List nama='fauzan' alamat='bekasi' />
            <Image source={{ uri: "https://images.unsplash.com/photo-1611915387288-fd8d2f5f928b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"}} style={{ width:400, height:159}} />
        </View>
    )
}