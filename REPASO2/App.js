import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, Alert, StyleSheet, ImageBackground } from 'react-native';

const Peliculas = [
  { key: '1', name: 'Conjuro' },
  { key: '2', name: 'Avatar' },
  { key: '3', name: 'La Profesia' },
  { key: '4', name: 'El despertar del diablo' },
  { key: '5', name: 'Matrix' },
  { key: '6', name: 'El Señor de los Anillos' },
  { key: '7', name: 'Titanic' },
  { key: '8', name: 'Los vengadores' },
  { key: '9', name: 'Jurassic Park' },
  { key: '10', name: 'El Rey León' },
];

const App = () => {
  const [searchText, setSearchText] = useState('');
  const [filteredPeliculas, setFilteredPeliculas] = useState(Peliculas);

  const searchPeliculas = () => {
    if (searchText === '') {
      setFilteredPeliculas(Peliculas);
    } else {
      const filtered = Peliculas.filter(movie => movie.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredPeliculas(filtered);
      if (filtered.length === 0) { Alert.alert('No se encontraron coincidencias');
      }
    }
  };

  return (
    <ImageBackground source={require('./assets/images/cine.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Buscar película...."
          value={searchText}
          onChangeText={setSearchText}
        />
        <Button title="Buscar" onPress={searchPeliculas} />
        <FlatList
          data={filteredPeliculas}
          keyExtractor={item => item.key}
          renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'rgba',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    backgroundColor: '#fff',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    backgroundColor: '#DCFCFA',
    marginVertical: 4,
  },
});









export default App;