import React, { useState, useEffect } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
  Keyboard,
  Alert,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";

import BodyText from "../components/BodyText";
import Card from "../components/Card";
import Input from "../components/Input";
import MainButton from "../components/MainButton";
import NumberContainer from "../components/NumberContainer";
import Colors from "../constants/color";

const StartGameScreen = ({ onStartGame }) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();
  const [buttonWidth, setButtonWidth] = useState(
    Dimensions.get("window").width / 4
  );

  const {
    screen,
    summaryContainer,
    buttonContainer,
    inputContainer,
    title,
    button,
    input,
    text,
  } = styles;

  const numberInputHandler = (text) => {
    setEnteredValue(text.replace(/[^0-9]/g, ""));
  };

  const resetInput = () => {
    setEnteredValue("");
    setConfirmed(false);
  };

  useEffect(() => {
    const updateLayout = () => {
      setButtonWidth(Dimensions.get("window").width / 4);
    };
    Dimensions.addEventListener("change", updateLayout);
    return () => {
      Dimensions.removeEventListener("change", updateLayout);
    };
  });

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid number", "It has to be a number between 1 and 99", [
        { text: "Okay", style: "destructive", onPress: resetInput },
      ]);
      return;
    }
    setConfirmed(true);
    setSelectedNumber(chosenNumber);
    setEnteredValue("");
    Keyboard.dismiss();
  };

  return (
    <ScrollView>
      <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={30}>
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}
        >
          <View style={screen}>
            <BodyText style={title}>Start a new game</BodyText>
            <Card style={inputContainer}>
              <BodyText style={text}>Select a number</BodyText>
              <Input
                style={input}
                blurOnSubmit
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="number-pad"
                maxLength={2}
                onChangeText={numberInputHandler}
                value={enteredValue}
              />
              <View style={buttonContainer}>
                {/* <View style={button}> */}
                <View style={{ width: buttonWidth }}>
                  <Button
                    title="Reset"
                    color={Colors.accent}
                    onPress={resetInput}
                  />
                </View>
                <View style={{ width: buttonWidth }}>
                  {/* <View style={button}> */}
                  <Button
                    title="Confirm"
                    color={Colors.primary}
                    onPress={confirmInputHandler}
                  />
                </View>
              </View>
            </Card>
            {confirmed && (
              <Card style={summaryContainer}>
                <BodyText>You selected</BodyText>
                <NumberContainer>{selectedNumber}</NumberContainer>
                <MainButton
                  onPress={() => {
                    onStartGame(selectedNumber);
                  }}
                >
                  START GAME
                </MainButton>
              </Card>
            )}
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    // justifyContent:'flex-start'
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  inputContainer: {
    width: "80%",
    // maxWidth: "80%",
    minWidth: 300,
    maxWidth: "95%",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    fontFamily: "open-sans-bold",
  },
  // button: {
  //   // width: "40%",
  //   width: Dimensions.get("window").width / 4,
  // },
  input: {
    width: 50,
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  text: {
    fontFamily: "open-sans",
  },
});

export default StartGameScreen;
