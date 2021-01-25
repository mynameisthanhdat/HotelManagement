import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Colors } from '../../assests/icons/themes';

export default function Header() {
    return (
        <View style={styles.container}>
            <View style={styles.left}>
                <Text style={styles.subTitle}>Find a Thousand</Text>
                <Text style={styles.title}>Homes For Sale & Rent</Text>
            </View>
            <View>
                <Image 
                    source={require('../../assests/icons/bell.png')}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        color: '#2e5162',
        fontSize: 23,
    },
    subTitle: {
        color: '#2e5162',
        fontSize: 18,
    },
    left: {},
    icon: {
        width: 20,
        height: 20,
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
    }
})