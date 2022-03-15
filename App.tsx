import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { NativeBaseProvider, Box } from 'native-base';


import Router from './Router'

interface Props {
  
}



const App = (props: Props) => {
  return (
    <NativeBaseProvider>

<Router/>
   </NativeBaseProvider>
  )
}


export default App