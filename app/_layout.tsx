import { ThemeProvider, DarkTheme } from "@react-navigation/native";
import { Stack } from "expo-router";
import React from "react";
import "intl-pluralrules";
import "../i18n/i18n";

export default function App() {
  return (
    <ThemeProvider value={DarkTheme}>
      <Stack />
    </ThemeProvider>
  );
}
