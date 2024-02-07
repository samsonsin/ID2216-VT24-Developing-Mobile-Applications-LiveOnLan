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
import HelpScreenPresenter from "./presenters/HelpScreenPresenter";
import FeedbackPresenter from "./presenters/FeedbackPresenter";


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
			<FeedbackPresenter></FeedbackPresenter>
			<HelpScreenPresenter></HelpScreenPresenter>
			<Topbar></Topbar>
			<DrawerPresenter></DrawerPresenter>

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


