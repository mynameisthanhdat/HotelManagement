import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

export default function SearchHome() {
    return (
      <View style={styles.container}>
          <View style={styles.left}>
              <Image 
                style={styles.icon}
                source={require('../../assests/icons/search.png')}
              />
              <Text style={styles.search}>Search homes</Text>
          </View>
          <View style={styles.right}>
              <Image 
                style={styles.icon}
                source={require('../../assests/icons/filter.png')}
              />
          </View>
      </View>
    );
}

const styles = StyleSheet.create({
    icon: {
        width: 20,
        height: 20,
    },
    container: {
        flexDirection: 'row',
        padding: 20,
    },
    left: {
        flexDirection: 'row',
        backgroundColor: '#f5f8f9',
        flex: 1,
        padding: 14,
        borderRadius: 8,
        marginRight: 15,
    },
    text: {
        marginStart: 15,
    },
    right: {
        aspectRatio: 1,
        backgroundColor: '#2e5162',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    }
})