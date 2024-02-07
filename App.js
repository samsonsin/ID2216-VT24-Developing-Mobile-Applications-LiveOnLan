import "react-native-gesture-handler";
import * as React from "react";
import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {
	MD3LightTheme as DefaultTheme,
	PaperProvider,
} from "react-native-paper";
import Topbar from "./presenters/TopbarPresenter";
import DrawerPresenter from "./presenters/DrawerPresenter";

import AddDevicePresenter from "./presenters/AddDevicePresenter";
import EditDevicePresenter from "./presenters/EditDevicePresenter";
import HelpScreenPresenter from "./presenters/HelpScreenPresenter";
import FeedbackPresenter from "./presenters/FeedbackPresenter";
import HomePresenter from "./presenters/HomePresenter";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

const theme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		primary: "tomato",
		secondary: "yellow",
	},
};

const Drawer = createDrawerNavigator();
function App() {
	return (
		<NavigationContainer>
			<Drawer.Navigator initialRouteName="Home">
				<Drawer.Screen name="Home" component={HomePresenter} />
				<Drawer.Screen name="Feedback" component={FeedbackPresenter} />
				<Drawer.Screen name="Help" component={HelpScreenPresenter} />
			</Drawer.Navigator>
		</NavigationContainer>
	);
}

export default function Main() {
	return (
		<PaperProvider theme={theme}>
			<App />
		</PaperProvider>
	);
}

AppRegistry.registerComponent(appName, () => Main);
