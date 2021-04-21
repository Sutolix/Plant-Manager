import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { Button }  from '../components/Button';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Confirmation() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>
          😄
        </Text>
        <Text style={styles.title}>
          Prontinho
        </Text>
        <Text style={styles.subtitle}>
          Agora vamos começar a cuidar das suas 
          plantinhas com muito cuidade.
        </Text>
        <View style={styles.button}>
          <Button
            title="Começar"
          />
        </View>
      </View>


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 30
  },
  emoji: {
    fontSize: 78
  },
  title: {
    fontSize: 22,
    fontFamily: fonts.heading,
    textAlign: 'center',
    color: colors.heading,
    lineHeight: 38,
    marginTop: 15,

  },
  subtitle: {
    fontFamily: fonts.text,
    textAlign: 'center',
    fontSize: 17,
    paddingVertical: 10,
    color: colors.heading,
  },
  button: {
    width: '100%',
    paddingHorizontal: 50,
    marginTop: 20
  }
})