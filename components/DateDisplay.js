import moment from 'moment';
import React,{useState} from 'react'
import { View, Text } from 'react-native'
import { formCalender } from '../methods/helper';
import CurrentDate from './utils/CurrentDate';

const DateDisplay = (handler) => {
    const [dates, setDates] = useState(formCalender);
    return (
        <View>
            {
                dates.map((date,index) => <CurrentDate key={index} date={date}/>)
            }
        </View>
    )
}

export default DateDisplay
