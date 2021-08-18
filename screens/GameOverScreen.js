import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Colors from "../constants/color";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Game Over!</Text>
      <Text>Number of rounds: {props.rounds}</Text>
      <Text>Number: {props.number}</Text>
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
