import { Stack } from 'expo-router'
import React from 'react'

function Layout() {
  return (
  <Stack>
    <Stack.Screen 
        name="index"
        options={{
            title:'Login',
        }}
        />
        <Stack.Screen name="(tabs)" options={{headerShown:false}}/>
        <Stack.Screen name="modal" options={{presentation:'modal'}}/>
  </Stack>
  )
}

export default Layout