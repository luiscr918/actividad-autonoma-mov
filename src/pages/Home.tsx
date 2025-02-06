import { CommonActions, useNavigation } from '@react-navigation/native'
import React from 'react'
import { Button, Image, Text, useWindowDimensions, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../themes/styles';
import { BodyComponent } from '../components/BodyComponent';

export const Home = () => {
  const navigation = useNavigation();
  const { height } = useWindowDimensions();
  return (
    <SafeAreaView>
      <Text style={{
        ...styles.title,
        height: height * 0.10
      }}>Bienvenido</Text>
      <BodyComponent>
        <Image

          source={{ uri: 'https://www.beetrack.com/hs-fs/hubfs/Stock%20images/Hand%20holding%20smartphone%20with%20colorful%20app%20icons%20concept.jpeg?width=1600&name=Hand%20holding%20smartphone%20with%20colorful%20app%20icons%20concept.jpeg' }}
          style={styles.imgHome}
        />
        <Text style={styles.bodyTextHome}>Disfruta la App ^^</Text>
        <Button
          title='Acceder'
          onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'CalculadoraDiv' }))}
        />
      </BodyComponent>

    </SafeAreaView>
  )
}
