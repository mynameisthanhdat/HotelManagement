import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from './Header';
import SearchHome from './SearchHome';
import ListCard from './ListCard';

export default function HomeScreen() {
    return (
      <>
          <Header />
          <SearchHome />
          <ListCard />
      </>
    );
}

const styles = StyleSheet.create({

})