// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Image, SafeAreaView, Button, Alert } from 'react-native';

export default function App() {
  // console.log("App Executed");
  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      <Text>Hello Sergio!!</Text>
      <TouchableOpacity onPress={()=>{}}>
      <Image
            // blurRadius={10}
            // fadeDuration={1000}
             source={{ 
             width:200,
             height:300,
             uri:"https://picsum.photos/200/300",}}/>
             <Button
               title = "Click Me" 
               onPress={() =>
               Alert.prompt("My Title", "My Message", (text) => console.log(text))}/>
      </TouchableOpacity>
      
      {/* <StatusBar style="auto" /> */}
    </SafeAreaView>
    
  );
}
const containerStyle = {backgroundColor:"aqua"};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
