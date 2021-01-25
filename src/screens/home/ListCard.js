import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { Mocks } from '../../assests/data';
import Item from './Item';

export default function ListCard() {
    renderItem = ({item}) => <Item item={item} />;

    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.titleList}>Recomanded</Text>
                <Text style={styles.title}>View All</Text>
            </View>

            <FlatList 
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{paddingHorizontal: 20}}
                data={Mocks} 
                renderItem={renderItem}/>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
    },
    titleList: {
        fontSize: 20,
    }
})