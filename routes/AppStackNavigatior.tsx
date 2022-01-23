import React from "react";
import { Dashboard } from "../src/screens";
import {
  
	createStackNavigator,
} from "@react-navigation/stack";
const Stack = createStackNavigator();
const AppStackNavigator = () => {
	return (
		<Stack.Navigator
			initialRouteName="Dashboard"
      screenOptions={{ headerShown: false }}
		
		>
			<Stack.Screen
				name="Dashboard"
				component={Dashboard}
       
				
			/>

			
		</Stack.Navigator>
	);
};
export default AppStackNavigator;