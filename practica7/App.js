import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect}from 'react';
import {  StyleSheet, Text, View, FlatList, ActivityIndicator} from 'react-native';


export default function App() {
  const [user, setUser] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
   .then(response => response.json())
   .then(data=>{setUser(data), setLoading(false)})
  },[])


  if (loading) {
    return (
      <View style={styles.center}>
        <Text>Cargando...</Text>
        <ActivityIndicator size='large' color='#B5D6DB' />
      </View>
    );
  }

  return (
    <View style={styles.container}>
    
      <FlatList
        data={user}
        renderItem={({ item }) => (
          <View style={styles.item}><Text style={styles.item}>{item.name}, {item.phone} </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'stretched',
    justifyContent: 'center',
    paddingTop: 40
  },

  item: {
    padding: 10,
    fontSize: 24,
    height: 50,
    borderColor: '#E04E33',
    borderBottomWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  section: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingTop:4,
    paddingBottom: 4,
    
  }
  
});