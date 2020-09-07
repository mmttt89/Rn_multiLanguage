import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';
import RootNavigation from "./src/navigation/Root"
import LanguageContextProvider from "./src/services/Language_Context"

const App = () => {
  return (
    <>
    <LanguageContextProvider>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <RootNavigation />
      </SafeAreaView>
      </LanguageContextProvider>
    </>
  );
};

const styles = StyleSheet.create({

});

export default App;
