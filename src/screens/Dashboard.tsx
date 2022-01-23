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

const Dashboard: React.FC<Props> = ({ navigation }) => {
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;
  const imagebg = require("../../images/samplebg.jpg");
  return (
    <View height={"100%"} backgroundColor={"light.50"} >
      <ZStack alignItems={"flex-start"}>
        <Image
          source={require("../../images/samplebg.jpg")}
          alt="Tanny"
          
          blurRadius={2}
          height={screenHeight/2.6}
          width={"100%"}
          borderBottomLeftRadius={40}
          borderBottomRightRadius={40}
        />

        <Box style={{justifyContent:'space-around',paddingHorizontal:16,paddingTop:35}}>
          <Icon as={Feather} name="menu" color={"white"} size={"md"} />
          <Box background={'red.600'} width={40} borderWidth={2} paddingY={1.5}  borderRadius={12} textAlign={'center'} marginTop={4}
            _text={{
              fontSize: "sm",
              fontWeight: "bold",
              textAlign:'center',
              color: "white",
            }}
          >News of the Day</Box>
          <Text
            fontFamily={"SFProDisplay-Bold"}
            my={2}
            fontSize={"2xl"}
            color={"lightText"}
            width={"auto"}
            marginTop={2}
          >
            Utot na Pinasok sa Ref Tumigas at Nag Trending sa TikTok
          </Text>
          <TouchableOpacity>
          <Box flexDirection={'row'}  >
            <Text textAlign={'center'} fontFamily={"SFProDisplay-Medium"} color={'lightText'} style={{fontSize:15}}>Learn More</Text>
            <Icon as={Feather} name="arrow-right" size={"sm"} marginLeft={3} color={'lightText'}/> 
          </Box>
          </TouchableOpacity>
        </Box>
      </ZStack>
      <Box mt={72} mx={"auto"} width={screenWidth - 30} style={{}}>
        <Box
          flexDirection={"row"}
          alignContent={"center"}
          alignItems={"center"}
        >
          <Text fontFamily={"SFProDisplay-Bold"} fontSize={"3xl"}>
            Breaking News
          </Text>
          <Text
            my={"auto"}
            mx={"auto"}
            fontSize={"sm"}
            fontFamily={"SFProDisplay-Bold"}
          >
            More News
          </Text>
        </Box>
        <LatestNewsCard navigation={undefined}/>
      </Box>
    </View>
  );
};
export default Dashboard;
