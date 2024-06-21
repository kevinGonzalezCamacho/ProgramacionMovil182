import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ImageBackground } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';

SplashScreen.preventAutoHideAsync();

export default function App() {
  useEffect(() => {
    async function prepare() {
      try {
        
        await new Promise(resolve => setTimeout(resolve, 2000)); 
      } catch (e) {
        console.warn(e);
      } finally {
       
        await SplashScreen.hideAsync();
      }
    }

    prepare();
  }, []);

  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');

  return (
    <ImageBackground source={require('./assets/images/nike.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <Text>Formulario: </Text>

          <Text>Nombre: </Text>
          <TextInput style={styles.input} placeholder='Escribe Nombre...' onChangeText={setNombre} value={nombre} />

          <Text>Correo: </Text>
          <TextInput style={styles.input} placeholder='Escribe correo...' onChangeText={setCorreo} value={correo} />

          <Text>Contraseña: </Text>
          <TextInput style={styles.input} placeholder='Escribe Contraseña...' onChangeText={setContrasena} value={contrasena} secureTextEntry={true} />

          <Button 
            title='Guardar' onPress={() => {const formData= `Nombre: ${nombre} Correo: ${correo} Contraseña: ${contrasena} `; alert(`Formulario Enviado\n${formData}`);}}
          />
        </View>
        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: '#DCD6E6',
    width: '80%',
    height: 60,
    borderBottomColor: '#EB1406',
    borderBottomWidth: 2,
    marginBottom: 10,
    padding: 10,
  },
  formContainer: {
    width: '80%',
    padding: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    alignItems: 'center',
  }
});
