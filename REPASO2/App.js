import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';

const App = () => {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');

  const handleSum = () => {
    const result = Number(number1) + Number(number2);
    Alert.alert('Resultado de la Suma', `La suma es: ${result}`);
  };

  const handleSubtract = () => {
    const result = Number(number1) - Number(number2);
    Alert.alert('Resultado de la Resta', `La resta es: ${result}`);
  };

  const handleMultiply = () => {
    const result = Number(number1) * Number(number2);
    Alert.alert('Resultado de la Multiplicación', `La multiplicación es: ${result}`);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Número 1"
        keyboardType="numeric"
        value={number1}
        onChangeText={setNumber1}
      />
      <TextInput
        style={styles.input}
        placeholder="Número 2"
        keyboardType="numeric"
        value={number2}
        onChangeText={setNumber2}
      />
      <Button title="Sumar" onPress={handleSum} />
      <Button title="Restar" onPress={handleSubtract} />
      <Button title="Multiplicar" onPress={handleMultiply} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default App;
