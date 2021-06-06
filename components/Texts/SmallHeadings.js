import React from 'react'
import { View, Text } from 'react-native'
import tailwind from 'tailwind-rn'
import FontApply from '../utils/FontApply'

const SmallHeadings = ({text,position,color}) => {
    return (
        <View>
            <FontApply type="700Bold">
            <Text style={tailwind(`font-bold text-2xl w-full mb-2 ${color || 'text-white'} ${position || 'text-left'}`)}>{text}</Text>
            </FontApply>
        </View>
    )
}

export default SmallHeadings
