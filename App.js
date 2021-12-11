import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import axios from 'axios';
import Card from './src/card';

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });
  return (
    <View style={styles.container}>
      <Text style={header.container}>Mes repositories Github</Text>
      <ScrollView>
        <Card msg={"fsdfsdsfd"}/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: 'center',
    justifyContent: 'center',
    overflow:'scroll'
  },
});

const header = StyleSheet.create({
  container: {
    fontSize:40,
    fontWeight:'bold',
    marginTop:100,
    paddingBottom:30,
    color: "#5149e8",
    fontFamily: 'Inter_900Black',
    textAlign:'center'
  },
});