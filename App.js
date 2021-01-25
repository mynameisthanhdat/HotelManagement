import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/home/HomeScreen';

export default function App() {
  return (
    <>
      <StatusBar styleBar='dark-content'/>
      <SafeAreaView>
        <HomeScreen />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({

});
