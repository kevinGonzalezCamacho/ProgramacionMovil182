import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';



export default function App() {
  const [text,selText] = useState('valor Default')
  const [submit,setSumit] = useState('')
  return (
    <View style={styles.container}>
      <Text >Componentes TextInput: {submit} </Text>

      <TextInput style={styles.Input} placeholder = 'Excribe Texto...' onChangeText={ (t)=>selText=(t)} Value={text}/>
       <Button title='Precioname...' onPress={()=>{setSumit(text); alert('Texto enviado')}}/>
      
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
Input:{
  backgroundColor: '#DCD6E6',
  width: '80%',
  height: '60',
  borderBottomColor: '#EB1406',
  borderBottomWidth: 2,

}
  
});