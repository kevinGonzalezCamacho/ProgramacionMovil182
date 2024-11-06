import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';

const App = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');

  const showAlert = (message) => {
    Alert.alert('Resultado', message);
  };

  const handleSum = () => {
    showAlert(`La suma es: ${parseFloat(num1) + parseFloat(num2)}`);
  };

  const handleSubtract = () => {
    showAlert(`La resta es: ${parseFloat(num1) - parseFloat(num2)}`);
  };

  const handleMultiply = () => {
    showAlert(`La multiplicación es: ${parseFloat(num1) * parseFloat(num2)}`);
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Número 1"
        keyboardType="numeric"
        value={num1}
        onChangeText={setNum1}
        style={{ marginBottom: 10, borderWidth: 1, padding: 5 }}
      />
      <TextInput
        placeholder="Número 2"
        keyboardType="numeric"
        value={num2}
        onChangeText={setNum2}
        style={{ marginBottom: 10, borderWidth: 1, padding: 5 }}
      />
      <Button title="Sumar" onPress={handleSum} />
      <Button title="Restar" onPress={handleSubtract} />
      <Button title="Multiplicar" onPress={handleMultiply} />
    </View>
  );
};

export default App;
