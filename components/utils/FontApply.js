import React from 'react'
import { View, Text } from 'react-native'

const FontApply = ({children,type,position}) => {
    return (
            <Text style={{fontFamily:`Montserrat_${type}`,textAlign:position || 'left'}}>{children}</Text>
    )
}

export default FontApply
