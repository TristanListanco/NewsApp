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
  Divider,
} from "native-base";
import { Feather } from "@expo/vector-icons";

import { Dimensions, ImageBackground, SafeAreaView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
interface Props{
  navigation:any
}

const LatestNewsCard: React.FC<Props> = ({ navigation }) => {
  return(
    <Box borderWidth={1} paddingY={20} borderRadius="md">
      
    </Box>
  )
}
export default LatestNewsCard;