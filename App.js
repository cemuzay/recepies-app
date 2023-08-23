import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView,Image, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
const Tab =createBottomTabNavigator();
export default function App() {


  return (
    <SafeAreaView>
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home}/>
      </Tab.Navigator>
    </NavigationContainer>
      
    </SafeAreaView>
  );
}