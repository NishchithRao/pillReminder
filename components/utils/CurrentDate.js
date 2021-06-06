import React from 'react'
import { View, Text } from 'react-native'

const CurrentDate = ({date,day}) => {
    return (
        <View>
            <Text>{date.displayDate}</Text>
            <Text>{date.day}</Text>
        </View>
    )
}

export default CurrentDate
