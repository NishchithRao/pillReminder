import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import tailwind from 'tailwind-rn';

const RoundBtn = ({handler,text}) => {
    return (
        <View>
            <TouchableOpacity
            style={tailwind("bg-gray-50 p-2 rounded-lg")}
            onPress={handler}>
                <Text><AntDesign name={text} size={24} color="black" /></Text>
            </TouchableOpacity>
        </View>
    )
}

export default RoundBtn
