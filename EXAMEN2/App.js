import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/native-stack';

function homeScreen(navigation){
  return(
    <View>
      <Text>Home Screen</Text>
      <Button title="Ir a detalles" onPress={()=>navigation.navigate('Details')} />
    </View>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Inserta 2 numeros </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
