import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import Header from "./components/Header";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  let [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  const gameOverHandler = (numOfRounds) => {
    setGuessRounds(numOfRounds);
  };

  const newGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(null);
  };
  return (
    <SafeAreaView style={styles.screen}>
      {/* <View> */}
      <Header title="Guess a number" />
      {userNumber && guessRounds <= 0 ? (
        <GameScreen onGameOver={gameOverHandler} userChoice={userNumber} />
      ) : !userNumber && guessRounds <= 0 ? (
        <StartGameScreen onStartGame={startGameHandler} />
      ) : (
        <GameOverScreen
          rounds={guessRounds}
          number={userNumber}
          newGame={newGameHandler}
        />
      )}
      {/* </View> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
