import React from "react";
import { View, Text, Image } from "react-native";
import { COLORS } from "../constants";

const TabIcon = ({ focused, icon }) => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        height: 80,
        width: 50,
      }}
    >
    <Image source={icon} resizeMode="contain" style={{width: 30, height: 30, tintColor: focused ? COLORS.darkLime : COLORS.lightLime}} />
    </View>
  );
};

export default TabIcon;
