import "react-native-gesture-handler";
import * as React from "react";
import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";
import {
	MD3LightTheme as DefaultTheme,
	PaperProvider,
} from "react-native-paper";

import AddDevicePresenter from "./presenters/AddDevicePresenter";
import EditDevicePresenter from "./presenters/EditDevicePresenter";
import HelpScreenPresenter from "./presenters/HelpScreenPresenter";
import FeedbackPresenter from "./presenters/FeedbackPresenter";
import HomePresenter from "./presenters/HomePresenter";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import SettingsPresenter from "./presenters/SettingsPresenter";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const theme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		primary: "#71bdff",
		secondary: "#00e676",
	},
};

import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
	default: "native",
});
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="root"
					options={{ headerShown: false }}
					children={() => (
						<Drawer.Navigator initialRouteName="Home">
							<Drawer.Screen name="Home" component={HomePresenter} />
							<Drawer.Screen name="Feedback" component={FeedbackPresenter} />
							<Drawer.Screen name="Help" component={HelpScreenPresenter} />
							<Drawer.Screen name="Settings" component={SettingsPresenter} />
						</Drawer.Navigator>
					)}
				/>
				<Stack.Screen
					name="Edit Device Screen"
					component={EditDevicePresenter}
				/>
				<Stack.Screen name="Add Device Screen" component={AddDevicePresenter} />
			</Stack.Navigator>
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
