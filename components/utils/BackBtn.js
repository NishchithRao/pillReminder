import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import {Ionicons} from '@expo/vector-icons';
import tailwind, { getColor } from 'tailwind-rn';
import { useNavigation } from '@react-navigation/core';

const BackBtn = () => {
    const {goBack} = useNavigation();
    console.log(getColor('blue-900'));
    return (
        <View>
            <TouchableOpacity onPress={() => goBack()}>
            <Ionicons name="arrow-back-outline" style={tailwind("text-4xl")} color={getColor('blue-900')} />
            </TouchableOpacity>
        </View>
    )
}

export default BackBtn
