import { Text, TouchableOpacity } from 'react-native';

export default function CustomButton({ title }) {
    return (
        <TouchableOpacity className="w-[90%] my-2 mx-auto h-14 rounded-xl border-2 text-black font-bold flex items-center justify-center" title='Start' >
            <Text className="text-xl">{title}</Text>
        </TouchableOpacity>
    )
}