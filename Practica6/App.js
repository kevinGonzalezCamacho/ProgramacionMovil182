import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Texto = () => {
  const [contenido, setcontenido]= useState('Hola mundo')
  const actualizarcontenido=()=>{setcontenido('state actualizado este texto')}
  return (<Text onPress={actualizarcontenido}> {contenido} </Text>)
} 

export default function App() {
  return (
    <View style={styles.container}>


      <Text>Hola Mundo</Text>

      <Texto contenido={'Reac Native'}/> 


      <Button title='Presioname' color='#000000'></Button>

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
