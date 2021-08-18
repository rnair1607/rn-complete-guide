import React, { useState } from "react";
import {
  Button,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import BodyText from "../components/BodyText";
import Colors from "../constants/color";
import MainButton from "../components/MainButton";

const GameOverScreen = (props) => {
  return (
    <ScrollView>
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
    </ScrollView>
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
    marginBottom: Dimensions.get("window").height / 20,
    textAlign: "center",
    fontSize: Dimensions.get("window").height < 400 ? 16 : 20,
  },

  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
  },
  imageContainer: {
    borderRadius: (Dimensions.get("window").width * 0.7) / 2,
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").width * 0.7,
    overflow: "hidden",
    marginVertical: Dimensions.get("window").height / 20,
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
