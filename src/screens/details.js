import { StyleSheet, View, Image, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import Text from '../components/text/text'
import { colors } from '../theme/colors';
import { AntDesign } from '@expo/vector-icons';

export default function Details() {
  return (
    <>
      <ImageBackground
        source={require('../../assets/vegitable.png')}
        resizeMode="cover" style={styles.image}>

        <View style={styles.container}>
          <Text preset='h2'>Boston Lettuce</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
            <Text preset='h2' style={{ marginRight: 10 }}>1.10</Text>
            <Text preset='primary'>€ / piece</Text>
          </View>

          <Text preset='small' style={{ color: colors.green }}>~ 150 gr / piece</Text>
          <Text preset='h3' style={{ marginTop: 30 }}>Spain</Text>
          <Text preset='primary' style={{ color: colors.grey, marginTop: 10 }}>Lettuce is an annual plant of the daisy family, Asteraceae. It is most often grown as a leaf vegetable, but sometimes for its stem and seeds. Lettuce is most often used for salads, although it is also seen in other kinds of food, such as soups, sandwiches and wraps; it can also be grilled.</Text>

          <View style={{ backgroundColor: colors.white, paddingTop: 50}}>
            <Pressable
              onPress={() => navigation.navigate('Details')}
              style={styles.button}
            >
              <Text style={{ color: colors.black, textAlign: 'center' }}>
                 <AntDesign name="shoppingcart" size={24} color="black"  style={{paddingRight:20}}/> ORDER NOW</Text>
            </Pressable>
          </View>
        </View>

      </ImageBackground>
    </>
  )
}

const styles = StyleSheet.create({
  headerImg: {
    marginTop: 30
  },
  image: {
    height: '52%',
  },
  container: {
    marginTop: 180,
    backgroundColor: colors.white,
    padding: 20,
    marginBottom: 100,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingTop: 50,
  },
  button: {
    backgroundColor: colors.green,
    padding: 15,
    marginHorizontal: 20,
    borderRadius: 10,
    marginBottom: 10

  },
  addChart:{
    height:50,
    borderRadius:20,
    backgroundColor: colors.bgGrey
  }
})