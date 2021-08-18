import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BodyText from "./BodyText";

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
    backgroundColor: "#ccc",
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    color: "black",
    fontSize: 18,
    fontFamily: "open-sans-bold",
  },
});
export default Header;
