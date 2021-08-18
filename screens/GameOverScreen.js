import React, { useState } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import BodyText from "../components/BodyText";
import Colors from "../constants/color";
import MainButton from "../components/MainButton";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <BodyText style={styles.title}>Game Over!</BodyText>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          fadeDuration={300}
          resizeMode="cover"
          source={require("../assets/success.png")}
          // source={{
          //   uri: "https://t3.ftcdn.net/jpg/02/51/28/40/360_F_251284036_cU2F5jsod18MupuAAZDNtviJ68TCvLjN.jpg",
          // }}
        />
      </View>
      <BodyText style={styles.description}>
        Your phone needed{" "}
        <BodyText style={styles.highlight}>{props.rounds}</BodyText> rounds to
        guess the number{" "}
        <BodyText style={styles.highlight}>{props.number}</BodyText>.
      </BodyText>
      {/* <BodyText>Number of rounds: {props.rounds}</BodyText>
      <BodyText>Number: {props.number}</BodyText> */}
      <MainButton onPress={props.newGame}>Restart</MainButton>
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
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.accent,
  },
  description: {
    marginBottom: 10,
    textAlign: "center",
  },

  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
  },
  imageContainer: {
    borderRadius: 150,
    width: 300,
    height: 300,
    overflow: "hidden",
    marginVertical: 30,
    // borderColor: "black",
    // borderWidth: 5,
  },
  image: {
    width: "100%",
    height: "100%",
    // borderRadius: 200,
  },
});
export default GameOverScreen;
