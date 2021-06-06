import { useNavigation } from "@react-navigation/core";
import React, { useState,useEffect } from "react";
import { View, FlatList,SafeAreaView, Dimensions } from "react-native";
import tailwind from "tailwind-rn";
import { get } from "../methods/firebase/crud";
import RoundBtn from "./Buttons/RoundBtn";
import PillDisplay from "./PillDisplay";
import SmallHeadings from "./Texts/SmallHeadings";
import firebase from 'firebase';

const ListPills = (props) => {
  const {navigate} = useNavigation();
  const [data,setData] = useState([]);
  useEffect(() => {
    console.log(data);
    if(firebase.apps.length && !(data.length))
    get()
    .then(snapshot => {
      setData([]);
      snapshot.forEach(doc => setData([...data,doc.data()]))
    });
  },[firebase.apps.length]);
  return (
    <View>
      <View style={tailwind("bg-blue-900 w-full rounded-t-3xl")}>
          <SafeAreaView style={{height:Dimensions.get("screen").height - 200,width:Dimensions.get('screen').width}}>
        <FlatList
        style={tailwind("flex-shrink h-full mt-8 mx-2")}
          data={data}
          ListHeaderComponent={
          <View style={tailwind("mb-8 flex justify-between flex-row items-center")}>
            <SmallHeadings color="text-red-200" text="Pills to be taken today" />
            <RoundBtn text="plus" handler={() => navigate("NewReminder")}/>
            </View>}
          ListEmptyComponent={<SmallHeadings color="text-red-200" text="All pills taken for today" />}
          renderItem={({ item }) => <PillDisplay pill={item} />}
          keyExtractor={(item,index) => index.toString()}
        />
        </SafeAreaView>
      </View>
    </View>
  );
};

export default ListPills;
