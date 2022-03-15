
 import React from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';
 
 import { NavigationContainer } from '@react-navigation/native';
 
 
 const Section: React.FC<{
   title: string;
 }> = ({children, title}) => {
   const isDarkMode = useColorScheme() === 'dark';
   return (
     <View style={styles.sectionContainer}>
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
 
 const HomeScreens = () => {
   const isDarkMode = useColorScheme() === 'dark';
 
   const backgroundStyle = {
    flex: 1,
     backgroundColor: isDarkMode ? 'black' : '#eee',
   };
 
   return (
     <SafeAreaView style={backgroundStyle}>
       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
         <Section title="Welcome to my app">
           Description of the app
 
         </Section>
     </SafeAreaView>
   );
 };
 
 const styles = StyleSheet.create({
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   sectionTitle: {
     fontSize: 30,
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
 
 export default HomeScreens;
 