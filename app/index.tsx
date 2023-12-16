import { Link, useRouter } from 'expo-router';
import React from 'react'
import { Button, Text, View } from 'react-native'

function Page() {
  const router = useRouter();
  return (
   <View>
    <Button 
      onPress={()=> router.push('/register')}
      title="Open Register"
      />
    <Link href={'/register'} asChild>
      <Button title="Open Register with Link"/>
    </Link>
    <Link href={'/(tabs)/one'} asChild replace>
      <Button title="Login"/>
    </Link>
   </View>
  )
}

export default Page;