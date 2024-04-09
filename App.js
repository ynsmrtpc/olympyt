import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity } from 'react-native';
import { HomeSvg } from './svg/home';
import CustomButton from './components/CustomButton/CustomButton';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-zinc-200 gap-y-6">
      <View className="mb-10">
        <HomeSvg height={150} width={150} />
      </View>


      <View className="flex flex-col items-center justify-center">
        <Text className="text-zinc-700 text-5xl font-bold uppercase">Olympyt'e Hoşgeldiniz</Text>
        <Text className="text-zinc-500 text-md mt-6">Kişiselleştirilmiş bir fitness deneyimine hazır olun.</Text>
        <Text className="text-zinc-500 text-lg">Haydi başlayalım!</Text>
      </View>

      <View className="w-full">
        <CustomButton title="Başlayalım" />
        <CustomButton title="Introyu Geç" />
      </View>

      <View className="absolute bottom-10 left-0 right-0 flex flex-row justify-around p-2">
        <TouchableOpacity style={{ color: 'black' }}>
          <Text>
            Olympyt'te Yeni
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ color: 'black' }}>
          <Text>
            Giriş Yap
          </Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
