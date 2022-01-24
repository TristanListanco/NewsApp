import React from "react";
import { Dashboard,SearchView } from "../src/screens";
import {
  
	createStackNavigator,
	
} from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Root(){
	return(
		<Stack.Navigator
			initialRouteName="Dashboard"
      screenOptions={{ headerShown: false }}
		>
			<Stack.Screen
				name="Dashboard"
				component={Dashboard}	
			/>
	
		</Stack.Navigator>
	)
}

const AppStackNavigator = () => {
	return (
		<Tab.Navigator
			initialRouteName="Dashboard"
      screenOptions={{ headerShown: false }}
		>
			<Tab.Screen
				name="Root"
				component={Root}	
			/>
			<Tab.Screen
				name="Search"
				component={SearchView}	
			/>
	
		</Tab.Navigator>
	);
};
export default AppStackNavigator;