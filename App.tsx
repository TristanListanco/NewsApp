import React from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Code,
} from "native-base";
import NativeBaseIcon from "./components/NativeBaseIcon";
import AppStackNavigator from "./routes/AppStackNavigatior";
import { NavigationContainer } from "@react-navigation/native";
import useCachedResources from "./hooks/useCachedResources";


// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",

};

// extend the theme
export const theme = extendTheme({ config
 });

export default function App() {
  const isLoadingComplete = useCachedResources();
  if (!isLoadingComplete){
    return null;
  } else {
    return (
      <NativeBaseProvider>
        <NavigationContainer>
        <AppStackNavigator/>
        </NavigationContainer>
      </NativeBaseProvider>
    );
  }
  
}

// Color Switch Component
function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === "light" ? true : false}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === "light" ? "switch to dark mode" : "switch to light mode"
        }
      />
      <Text>Light</Text>
    </HStack>
  );
}
