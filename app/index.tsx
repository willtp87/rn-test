import { ThemeProvider, Text, createTheme } from "@rneui/themed";
import { useNavigation } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import "../i18n/i18n";
import { useTranslation } from "react-i18next";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";

import TimeInApp from "../components/TimeInApp";
import { store } from "../store";

const theme = createTheme({ mode: "dark" });

export default function Index() {
  const { t } = useTranslation();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: t("mainTitle") });
  }, [t, navigation]);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <View style={styles.container}>
          <Text>{t("helloWorld")}</Text>
          <StatusBar style="auto" />
          <TimeInApp />
        </View>
      </ThemeProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
