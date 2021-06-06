import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import tailwind from 'tailwind-rn'

const FlatFullBtn = ({children,bg,handler}) => {
    return (
        <TouchableOpacity
        style={tailwind(`p-3 ${bg} text-center`)}
        onPress={e => handler(e)}
      >{children}</TouchableOpacity>
    )
}

export default FlatFullBtn
