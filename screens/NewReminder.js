import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import tailwind from "tailwind-rn";
import FlatFullBtn from "../components/Buttons/FlatFullBtn";
import Count from "../components/Inputs/Count";
import NormalInput from "../components/Inputs/NormalInput";
import Heading from "../components/Texts/Heading";
import SmallHeadings from "../components/Texts/SmallHeadings";
import Time from "../components/Time";
import BackBtn from "../components/utils/BackBtn";
import FontApply from "../components/utils/FontApply";
import {add} from '../methods/firebase/crud';

const NewReminder = (props) => {
  const [loading,setLoading] = useState(false);
  const [data, setData] = useState({
    pillName: "",
    realTime: "",
    displayTime: "",
    isTriggerred: false,
    isTaken:false,
    patientName:'John Doe',
    taken: false,
  });
  const handleData = (name, value) => {
    setData({ ...data, [name]: value });
    console.log('here',data);
  };
  const changeCount = (val) => {
    let currentCount = data.count;
    currentCount += val;
    setData({ ...data, count: currentCount });
  };
  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    add(data)
    .then(data => {
      setLoading(false);
    })
  }
  return (
    <View style={tailwind("flex flex-col bg-red-200  pt-8 px-3 h-full w-full")}>
      <ScrollView>
        <View>
          <BackBtn />
          <Heading text="Add Reminder" color={'text-blue-900'} />
        </View>

        <View>
          <NormalInput
            label="Pill name"
            handler={(name, value) => handleData(name, value)}
            value={data.name}
          />
        </View>

        <View>
          <Time handler={(name, value) => handleData(name, value)} />
        </View>

        {/* <View style={tailwind("my-3")}>
          <SmallHeadings color="text-blue-900" text="Pills to be taken" />
          <Count
            count={data.count}
            handler={(val) => changeCount(val)}
            text="times a day"
          />
        </View> */}

        <View style={tailwind("mt-8")}>
          <FlatFullBtn bg="bg-white" handler={e => handleSubmit(e)}>
            <FontApply type="700Bold" position="center">
              <Text style={tailwind("text-blue-900 text-2xl text-center")}>
                {loading ? 'Please wait...':'Create'}
              </Text>
            </FontApply>
          </FlatFullBtn>
        </View>
      </ScrollView>
    </View>
  );
};

export default NewReminder;
