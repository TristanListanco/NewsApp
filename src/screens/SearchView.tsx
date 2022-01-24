import React, { useState, useEffect } from "react";
import {
  NativeBaseProvider,
  Box,
  HStack,
  VStack,
  Text,
  Stack,
  Pressable,
  Menu,
  Image,
  Icon,
  ScrollView,
  AspectRatio,
  StatusBar,
  Center,
  View,
  ZStack,
  Spacer,
} from "native-base";
import { Feather } from "@expo/vector-icons";
import LatestNewsCard from "../../components/cards/LatestNewsCard";
import { Dimensions, ImageBackground, SafeAreaView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

interface Props {
  route: any;
  navigation: any;
}
const SearchView:React.FC<Props>= ({ navigation }) =>{
  return(
    <Box safeArea>
      <VStack>
        <Text>THIS IS SEARCHVIEW</Text>
      </VStack>
    </Box>
  )
}
export default SearchView;