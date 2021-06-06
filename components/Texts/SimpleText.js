import React from 'react'
import { View, Text } from 'react-native'
import tailwind from 'tailwind-rn'
import FontApply from '../utils/FontApply'

const SimpleText = ({children,color}) => {
    return (
        <View>
            <FontApply type="400Regular">
                <Text style={tailwind(`${color || 'text-white'} text-2xl`)}>{children}</Text>
            </FontApply>
        </View>
    )
}

export default SimpleText
