import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import BodyText from "../components/BodyText";
import Colors from "../constants/color";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <BodyText>Game Over!</BodyText>
      <BodyText>Number of rounds: {props.rounds}</BodyText>
      <BodyText>Number: {props.number}</BodyText>
      <Button title="Restart" color={Colors.primary} onPress={props.newGame} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
});
export default GameOverScreen;
