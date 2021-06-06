import React from 'react'
import { View, Text } from 'react-native'
import tailwind from 'tailwind-rn'
import FontApply from '../utils/FontApply'

const Heading = ({text,color}) => {
    return (
        <View style={tailwind("mt-3")}>
            <FontApply type="700Bold">
            <Text style={tailwind(`mt-8 ${color || 'text-white'} text-4xl font-black pt-2`)}>{text}</Text>
            </FontApply>
        </View>
    )
}

export default Heading
