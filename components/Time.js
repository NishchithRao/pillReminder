import React, { useState } from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import tailwind, { getColor } from "tailwind-rn";
import { getFormattedTime } from "../methods/strings";
import SmallHeadings from "./Texts/SmallHeadings";
import { FontAwesome } from "@expo/vector-icons";
import FontApply from "./utils/FontApply";
import FlatFullBtn from "./Buttons/FlatFullBtn";
import moment from "moment";

const Time = ({ handler }) => {
  const [time, setTime] = useState(new Date());
  const [finalTime, setFinalTime] = useState("");
  const [show, setShow] = useState(false);

  const setSchedule = (currentTime) => {
    setShow(false);
    if (
      !currentTime.nativeEvent.timestamp ||
      !JSON.stringify(currentTime.nativeEvent.timestamp).indexOf("T")
    )
      return;
    setTime(currentTime.nativeEvent.timestamp);
    handler("displayTime", moment(currentTime.nativeEvent.timestamp).format('LT'));
    handler("realTime",moment(currentTime.nativeEvent.timestamp).format());
  };
  return (
    <View style={tailwind("mb-8")}>
      <SmallHeadings text="Notification" color="text-blue-900" />
      {show && (
        <DateTimePicker
          testID="pick123"
          mode="time"
          display="default"
          is24Hour={false}
          value={time}
          onChange={(selectedTime) => setSchedule(selectedTime)}
        />
      )}
      <FlatFullBtn bg="bg-blue-300" handler={() => setShow(true)}>
        <View style={tailwind("flex flex-row items-center")}>
          <View>
            <FontAwesome name="bell" size={18} color={getColor("blue-900")} />
          </View>
          <View style={tailwind("mx-2")}>
            <FontApply type="400Regular">
              <Text style={tailwind("text-lg px-2 text-blue-900")}>
                {finalTime || "Select Time"}
              </Text>
            </FontApply>
          </View>
        </View>
      </FlatFullBtn>
    </View>
  );
};

export default Time;
