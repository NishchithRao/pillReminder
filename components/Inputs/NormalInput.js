import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import tailwind from 'tailwind-rn';
import SmallHeadings from "../Texts/SmallHeadings";

const NormalInput = ({handler,value,label}) => {
  return (
    <View style={tailwind(" w-full my-8 text-center")}>
      <SmallHeadings text={label} color="text-blue-900"/>
      <TextInput
        onChangeText={(text) => handler('pillName',text)}
        placeholder="Enter pill name"
        clearButtonMode="while-editing"
        style={tailwind("bg-blue-300 text-white h-14 text-center text-lg w-full")}
        value={value}
      />
    </View>
  );
};

export default NormalInput;
