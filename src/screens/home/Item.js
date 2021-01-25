import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

const w = Dimensions.get('screen').width;

const Item = ({item}) => {
    return (
        <View style={styles.card}>
            <View style={{position: 'relative'}}>
                <Image 
                    style={styles.image}
                    source={{uri: item.images[0]}}
                />
                <View style={styles.view1}/>
                <View style={styles.view2}/>
                <View style={styles.agentButton}>
                    <Text style={styles.textAgent}>
                        {item.type}
                    </Text>
                </View>
            </View>
            <View style={styles.bottom}>
                <View style={styles.priceCon}>
                    <Text style={styles.price}>
                        ${item.price}
                        <Text style={{fontWeight: 'normal', fontSize: 14}}>/year</Text>
                    </Text>
                    <View style={styles.starCon}>
                        <Image 
                            source={require('../../assests/icons/star.png')}
                        />
                        <Text style={styles.textStar}>{item.star}</Text>
                    </View>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.address}>{item.address}</Text>
                </View>
                <View style={styles.heartButton}>
                    <Image 
                        source={require('../../assests/icons/heart.png')}
                    />
                </View>
            </View>
        </View>
    );
}

export default Item;

const styles = StyleSheet.create({
    card: {
        padding: 10,
        shadowColor: '#2e5162',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        backgroundColor: '#FFF',
        marginVertical: 10,
        borderRadius: 10,
    },
    image: {
        width: w * 0.7,
        height: w * 0.5,
        borderRadius: 10,
        zIndex: 3,
    },
    price: {
        fontWeight: '900',
        color: '#E38771',
        fontSize: 20,
    },
    starCon: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textStar: {
        fontSize: 18,
    },
    priceCon: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    bottom: {
        padding: 10,
        marginTop: 20,
    },
    name: {
        fontSize: 20,
        color: '#2e5162',
        marginVertical: 10,
    },
    address: {
        color: 'gray',
    },
    view1: {
        position: 'absolute',
        width: '90%',
        height: 30,
        backgroundColor: '#CADADC',
        borderRadius: 30,
        alignSelf: 'center',
        bottom: -10,
        zIndex: 2,
    },
    view1: {
        position: 'absolute',
        width: '80%',
        height: 30,
        backgroundColor: '#E5f1f1',
        borderRadius: 30,
        alignSelf: 'center',
        bottom: -20
    },
    heartButton: {
        width: 40,
        height: 40,
        position: 'absolute',
        backgroundColor: '#fff',
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        right: 20,
        top: 20,
    },
    agentButton: {
        width: 50,
        height: 50,
        position: 'absolute',
        backgroundColor: '#2e5162',
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        left: 20,
        bottom: -15,
        zIndex: 5,
        borderColor: '#fff'
    },
    textAgent: {
        fontSize: 12,
        color: '#fff'
    }
})