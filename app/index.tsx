import { useRouter } from 'expo-router';
import React from 'react'
import { Text, View } from 'react-native'

function Page() {
  const router = useRouter();
  return (
   <View>
    <Text>Login</Text>
   </View>
  )
}

export default Page;