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
  item:any
}

const LatestNewsCard: React.FC<Props> = ({ navigation, item}) => {
  
  return(
    <Box flexDirection={'column'} width={"100%"} flex={1} marginY={5}>
    
      <VStack height={"40"} mt={16}  >
       <Image
          source={item.urlToImage ? {uri: item.urlToImage } : null}
          alt="Tanny"
          borderRadius={15}
          resizeMode="cover"
          height={'80%'}
          blurRadius={2}
        />
        <Box px={2}>
        <Text mt={2} fontSize={"md"} fontFamily={"SFProDisplay-Bold"} numberOfLines={3} isTruncated>{item.title}</Text>
        <Text color={'gray.400'}fontSize={'sm'}>4 hrs ago</Text>
        <Text color={'gray.400'}>{item.author} </Text>
        </Box>
      </VStack>
  
    </Box>
  )
}
export default LatestNewsCard;