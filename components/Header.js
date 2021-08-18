import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import BodyText from "./BodyText";
import Colors from "../constants/color";

const Header = ({ title }) => {
  const { header, headerTitle } = styles;
  return (
    <View style={header}>
      <BodyText style={headerTitle}>{title}</BodyText>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: Platform.OS === "android" ? "#ccc" : "white",
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: Platform.OS === "ios" ? "#ccc" : "transparent",
    borderBottomWidth: Platform.OS === "ios" ? 1 : 0,
  },
  headerTitle: {
    color: Platform.OS === "ios" ? "black" : "white",
    fontSize: 18,
    fontFamily: "open-sans-bold",
  },
});
export default Header;
