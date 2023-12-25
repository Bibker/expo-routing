import { Link } from 'expo-router';
import React from 'react'
import { Button, Text, View } from 'react-native';

function Page() {
    return (
        <View>
            <Link href={'/'} asChild replace>
                <Button title="Logout" />
            </Link>
            <Link href={'/(tabs)/one/details'} asChild>
                <Button title="Go To Details" />
            </Link>
            <Link href={'/(tabs)/one/bibker'} asChild>
                <Button title="Go To Details (bibker)" />
            </Link>
            <Link href={'/modal'} asChild>
                <Button title="Open Modal" />
            </Link>
        </View>
    )
}

export default Page;