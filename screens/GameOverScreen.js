import React, { useState } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import BodyText from "../components/BodyText";
import Colors from "../constants/color";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <BodyText style={styles.title}>Game Over!</BodyText>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          fadeDuration={300}
          resizeMode="cover"
          // source={require("../assets/success.png")}
          source={{
            uri: "https://t3.ftcdn.net/jpg/02/51/28/40/360_F_251284036_cU2F5jsod18MupuAAZDNtviJ68TCvLjN.jpg",
          }}
        />
      </View>
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
