import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

// import Component
// import EmbedExpression from "./src/screens/embedExpression";
// import Content from "./src/screens/content";
// import Header from "./src/screens/header";
// import Event from "./src/screens/event";
// import Props from "./src/screens/props";
// import State from "./src/screens/state";
import Form from "./src/screens/form";

//Import Screen

export default function App() {
  return (
    <View style={style.body}>
      {/* <StatusBar /> */}
      {/* Use Component */}
      {/* <EmbedExpression />
      <Content/>
      <Header/>
      <Event/> */}
      {/* <Props /> */}
      {/* <State/> */}
      <Form/>
      {/* <Text>fauzan</Text> */}
    </View>
  );
}

const style = StyleSheet.create({
  body: {
      backgroundColor: "green"
  },
  header: {
      
  }
})