import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";

// import Component
// import EmbedExpression from "./src/screens/embedExpression";
// import Content from "./src/screens/content";
// import Header from "./src/screens/header";
// import Event from "./src/screens/event";
import Props from "./src/screens/props";

//Import Screen

export default function App() {
  return (
    <View>
      <StatusBar />
      {/* Use Component */}
      {/* <EmbedExpression />
      <Content/>
      <Header/>
      <Event/> */}
      <Props />
    </View>
  );
}
