import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { HomeSvg } from '../../svg/home';
import { Link } from 'expo-router';

export default function App() {
    return (
        <View className="flex-1 items-center justify-center bg-zinc-200 gap-y-6">
            <View className="mb-10">
                <Link href="/">
                    <HomeSvg height={150} width={150} />
                </Link>
            </View>

            <StatusBar style="auto" />
        </View>
    );
}
