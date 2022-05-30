import { StyleSheet, View, Image, Pressable } from 'react-native';
import React from 'react';
import { colors } from '../theme/colors';
import Text from '../components/text/text';

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.img}>
                <Image
                    source={require('../../assets/D.png')} />
            </View>

            {/* second View */}
            <View style={styles.secondView}>

                <View style={styles.upperImg}>
                    <Image
                        source={require('../../assets/Vector.png')} />
                </View>
                <Text preset='h1' style={styles.h1}>Non-Contact {'\n'} Deliveries</Text>
                <Text style={styles.paragraph}>
                    When placing an order, select the option “Contactless delivery” and the courier
                    will leave your order at the door.
                </Text>

                <Pressable
                    onPress={() => navigation.navigate('Details')}
                    style={styles.button}
                >
                    <Text style={{ color: colors.white, textAlign: 'center' }}>ORDER NOW</Text>
                </Pressable>
                <Pressable
                    onPress={() => alert("Functionlity will be added soon..")}>
                    <Text style={{ backgroundColor: colors.white, padding: 10, textAlign: 'center', marginBottom: 120 }}>DISMISS</Text>
                </Pressable>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light
    },
    img: {
        marginTop: 90,
        marginLeft: 50,
        width: 50,
        height: 50,
        backgroundColor: '#CDFFB6',
        padding: 20,
        borderRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    secondView: {
        backgroundColor: colors.bgGrey,
        marginTop: 150,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        paddingTop: 50
    },
    upperImg: {
        backgroundColor: colors.white,
        borderRadius: 50,
        height: 50,
        width: 50,
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 40
    },
    h1: {
        marginTop: 20,
        alignSelf: 'center',
        textAlign: 'center'
    },
    paragraph: {
        padding: 20,
        textAlign: 'center',
        marginBottom: 40
    },
    button: {
        backgroundColor: colors.green,
        padding: 15,
        marginHorizontal: 20,
        borderRadius: 10,
        marginBottom: 10

    }
})
