import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import NewReminder from "../screens/NewReminder";
import tailwind from "tailwind-rn";
import "firebase/firestore";
import DateDisplay from "./DateDisplay";
import Heading from "./Texts/Heading";
import moment from "moment";
import SmallHeadings from "./Texts/SmallHeadings";
import ListPills from "./ListPills";
import SimpleText from "./Texts/SimpleText";


const Home = () => {
  return (
  <View
    style={tailwind("bg-red-200 h-full w-full")}
  ><View style={tailwind('flex flex-col justify-between items-center w-full h-full')}>
    <View style={tailwind("w-full flex flex-col items-center mt-16")}>
    <Heading text="Hello Ashwitha" color="text-blue-900" />
    <SimpleText>
    {moment().format('MMM Do YYYY')}
    </SimpleText>
    <SimpleText>
      {moment().format('dddd')}
    </SimpleText>
    </View>
  <ListPills/>
  </View>
  </View>
  )
};

export default Home;
