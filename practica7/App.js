import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <SectionList style={styles.sectionList}
        sections={[
          {
            title: 'Grupo A',
            data: [
              { key: '1', name: 'Kevin' },
              { key: '2', name: 'Armando' },
              { key: '3', name: 'Abram' },
              { key: '4', name: 'Alfredo' },
              { key: '5', name: 'Ivan' },
              { key: '6', name: 'Ivan' },
              { key: '7', name: 'Ivan' },
            ],
          },
          {
            title: 'Grupo B',
            data: [
              { key: '1', name: 'Kevin' },
              { key: '2', name: 'Armando' },
              { key: '3', name: 'Abram' },
              { key: '4', name: 'Alfredo' },
              { key: '5', name: 'Ivan' },
              { key: '6', name: 'Ivan' },
              { key: '7', name: 'Ivan' },
            ],
          },
          {
            title: 'Grupo C',
            data: [
              { key: '1', name: 'Kevin' },
              { key: '2', name: 'Armando' },
              { key: '3', name: 'Abram' },
              { key: '4', name: 'Alfredo' },
              { key: '5', name: 'Ivan' },
              { key: '6', name: 'Ivan' },
              { key: '7', name: 'Ivan' },
            ],
          },
        ]}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
        renderSectionHeader={({ section}) => (<Text style={styles.section}>{section.title}</Text>)}

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
    borderBottomWidth: 2
  },
  section: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingTop:4,
    paddingBottom: 4,
    
  }
  
});