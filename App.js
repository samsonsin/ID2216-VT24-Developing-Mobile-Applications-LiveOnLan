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

const theme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		primary: "tomato",
		secondary: "yellow",
	},
};

function App() {
	return (
		<View className="w-100% h-100%">
			<Topbar></Topbar>
			<AddDevicePresenter></AddDevicePresenter>
			{/*<DrawerPresenter></DrawerPresenter>*/}
		</View>
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
