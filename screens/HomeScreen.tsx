


import React from 'react'
import { View, StyleSheet, useColorScheme, SafeAreaView, StatusBar } from 'react-native'

import { Button, Heading, Text } from "native-base";
import { NativeRouter, Route, Link, Routes, useParams } from "react-router-native";

interface Props {

}

const Section: React.FC<{
  title: string;
}> = ({ children, title }) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (

    <View>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? 'white' : 'black',
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? 'white' : 'black',
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const HomeScreen = (props: Props) => {

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? 'black' : '#fff',
  };

  return (
    <View>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Section title="Welcome to my app">

        Description of the app

      </Section>


    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({

  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 20,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});