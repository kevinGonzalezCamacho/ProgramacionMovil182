import * as React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Navegación: Tabs</Text>
      <Text style={styles.description}>Bienvenido a la pantalla de Inicio</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Ir a Configuración"
          onPress={() => navigation.navigate('Settings')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Ir a Perfil"
          onPress={() => navigation.navigate('Profile')}
        />
      </View>
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configuración</Text>
      <Text style={styles.description}>Aquí puedes configurar tu aplicación</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Ir a Inicio"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Ir a Perfil"
          onPress={() => navigation.navigate('Profile')}
        />
      </View>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil</Text>
      <Text style={styles.description}>Bienvenido a tu perfil</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'cog' : 'cog';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'user' : 'user';
            }

            return <Entypo name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerStyle: styles.headerStyle,
          headerTintColor: styles.headerTintColor.color,
          headerTitleAlign: 'center',
        })}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Inicio' }}
        />
        <Tab.Screen 
          name="Settings" 
          component={SettingsScreen} 
          options={{ title: 'Configuración' }}
        />
        <Tab.Screen 
          name="Profile" 
          component={ProfileScreen} 
          options={{ title: 'Perfil' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    marginVertical: 10, 
  },
  headerStyle: {
    backgroundColor: '#6200ea', 
  },
  headerTintColor: {
    color: '#ffffff', 
  },
});
