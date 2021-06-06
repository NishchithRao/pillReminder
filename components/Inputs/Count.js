import React from 'react'
import { View, Text } from 'react-native'
import tailwind from 'tailwind-rn'
import RoundBtn from '../Buttons/RoundBtn'
import FontApply from '../utils/FontApply'

const Count = ({handler,text,count}) => {
    return (
        <View>
            <View style={tailwind("flex flex-row items-center justify-between p-3 bg-blue-300")}>
                <FontApply type="400Regular">
                <Text style={tailwind("text-lg text-blue-900")}>{count} {text}</Text>
                </FontApply>
                <RoundBtn handler={() => handler(1)} text="plus"/>
            </View>
        </View>
    )
}

export default Count
