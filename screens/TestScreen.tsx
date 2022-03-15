import React, { useState, useEffect } from 'react';
import { View, Text, useColorScheme, StyleSheet } from 'react-native'




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

const TestScreen = (props: Props) => {



    return (
        <View>
        <Section title="Test Screen Title">
  
          Description of TestScreen
  
        </Section>
  
  
      </View>
    )
}

export default TestScreen

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