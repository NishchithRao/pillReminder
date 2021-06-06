import React from "react";
import { View, Text } from "react-native";
import tailwind from "tailwind-rn";
import SmallHeadings from "./Texts/SmallHeadings";
import { FontAwesome } from "@expo/vector-icons";
import moment from "moment";

const PillDisplay = ({ pill,key }) => {
  const {displayTime,pillName} = pill;
  return (
    <View
      style={tailwind(
        "flex flex-col justify-between bg-white p-4 rounded-3xl my-2"
      )}
    >
      <SmallHeadings color="text-blue-900" text={pillName} />
      <View style={tailwind("mt-3 flex flex-row items-center")}>
        <View style={tailwind("pr-3")}>
          <FontAwesome name="bell" size={18} color="blue" />
        </View>
        <Text style={tailwind("text-blue-900 font-normal")}>{displayTime}</Text>
      </View>
    </View>
  );
};

export default PillDisplay;
