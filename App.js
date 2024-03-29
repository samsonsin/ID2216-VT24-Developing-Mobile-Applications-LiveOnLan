import "react-native-gesture-handler";
import { useEffect, useLayoutEffect, useState } from "react";
import { AppRegistry, Appearance, View, useColorScheme } from "react-native";
import { name as appName } from "./app.json";
import { PaperProvider, ActivityIndicator } from "react-native-paper";
import { initModel, useThemeType } from "./model";
import HelpPresenter from "./presenters/HelpPresenter";
import HomePresenter from "./presenters/HomePresenter";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
	NavigationContainer,
	DefaultTheme,
	DarkTheme,
} from "@react-navigation/native";
import SettingsPresenter from "./presenters/SettingsPresenter";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";

import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
	default: "native",
});
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
export default function App() {
	useLayoutEffect(() => {
		initModel();
	}, []);
	const [themeType, setThemeType] = useThemeType();
	const colorScheme = useColorScheme();

	useEffect(() => {
		setStatusBarStyle(statusBarStyle);
	}, [typeUsed]);

	const [statusBarStyle, setStatusBarStyle] = useState(colorScheme);

	var typeUsed =
		themeType == "system"
			? colorScheme === null
				? "light"
				: colorScheme
			: themeType;
	const theme =
		typeUsed == "light"
			? {
					colors: {
						primary: "rgb(0, 99, 154)",
						onPrimary: "rgb(255, 255, 255)",
						primaryContainer: "rgb(206, 229, 255)",
						onPrimaryContainer: "rgb(0, 29, 50)",
						secondary: "rgb(0, 109, 53)",
						onSecondary: "rgb(255, 255, 255)",
						secondaryContainer: "rgb(98, 255, 150)",
						onSecondaryContainer: "rgb(0, 33, 11)",
						tertiary: "rgb(104, 71, 192)",
						onTertiary: "rgb(255, 255, 255)",
						tertiaryContainer: "rgb(232, 221, 255)",
						onTertiaryContainer: "rgb(33, 0, 93)",
						error: "rgb(186, 26, 26)",
						onError: "rgb(255, 255, 255)",
						errorContainer: "rgb(255, 218, 214)",
						onErrorContainer: "rgb(65, 0, 2)",
						background: "rgb(252, 252, 255)",
						onBackground: "rgb(26, 28, 30)",
						surface: "rgb(252, 252, 255)",
						onSurface: "rgb(26, 28, 30)",
						surfaceVariant: "rgb(222, 227, 235)",
						onSurfaceVariant: "rgb(66, 71, 78)",
						outline: "rgb(114, 119, 127)",
						outlineVariant: "rgb(194, 199, 207)",
						shadow: "rgb(0, 0, 0)",
						scrim: "rgb(0, 0, 0)",
						inverseSurface: "rgb(47, 48, 51)",
						inverseOnSurface: "rgb(240, 240, 244)",
						inversePrimary: "rgb(150, 204, 255)",
						elevation: {
							level0: "transparent",
							level1: "rgb(239, 244, 250)",
							level2: "rgb(232, 240, 247)",
							level3: "rgb(224, 235, 244)",
							level4: "rgb(222, 234, 243)",
							level5: "rgb(217, 231, 241)",
						},
						surfaceDisabled: "rgba(26, 28, 30, 0.12)",
						onSurfaceDisabled: "rgba(26, 28, 30, 0.38)",
						backdrop: "rgba(44, 49, 55, 0.4)",
					},
			  }
			: {
					colors: {
						primary: "rgb(150, 204, 255)",
						onPrimary: "rgb(0, 51, 83)",
						primaryContainer: "rgb(0, 74, 118)",
						onPrimaryContainer: "rgb(206, 229, 255)",
						secondary: "rgb(0, 228, 117)",
						onSecondary: "rgb(0, 57, 24)",
						secondaryContainer: "rgb(0, 82, 38)",
						onSecondaryContainer: "rgb(98, 255, 150)",
						tertiary: "rgb(206, 189, 255)",
						onTertiary: "rgb(57, 5, 144)",
						tertiaryContainer: "rgb(80, 43, 167)",
						onTertiaryContainer: "rgb(232, 221, 255)",
						error: "rgb(255, 180, 171)",
						onError: "rgb(105, 0, 5)",
						errorContainer: "rgb(147, 0, 10)",
						onErrorContainer: "rgb(255, 180, 171)",
						background: "rgb(26, 28, 30)",
						onBackground: "rgb(226, 226, 229)",
						surface: "rgb(26, 28, 30)",
						onSurface: "rgb(226, 226, 229)",
						surfaceVariant: "rgb(66, 71, 78)",
						onSurfaceVariant: "rgb(194, 199, 207)",
						outline: "rgb(140, 145, 152)",
						outlineVariant: "rgb(66, 71, 78)",
						shadow: "rgb(0, 0, 0)",
						scrim: "rgb(0, 0, 0)",
						inverseSurface: "rgb(226, 226, 229)",
						inverseOnSurface: "rgb(47, 48, 51)",
						inversePrimary: "rgb(0, 99, 154)",
						elevation: {
							level0: "transparent",
							level1: "rgb(32, 37, 41)",
							level2: "rgb(36, 42, 48)",
							level3: "rgb(40, 47, 55)",
							level4: "rgb(41, 49, 57)",
							level5: "rgb(43, 53, 62)",
						},
						surfaceDisabled: "rgba(226, 226, 229, 0.12)",
						onSurfaceDisabled: "rgba(226, 226, 229, 0.38)",
						backdrop: "rgba(44, 49, 55, 0.4)",
					},
			  };

	return themeType !== null ? (
		<PaperProvider theme={theme}>
			<NavigationContainer
				theme={typeUsed == "light" ? DefaultTheme : DarkTheme}
			>
				<Drawer.Navigator
					initialRouteName="Home"
					screenOptions={{
						headerTintColor: theme.colors.primary,
					}}
				>
					<Drawer.Screen name="Home" component={HomePresenter} />
					<Drawer.Screen name="Help" component={HelpPresenter} />
					<Drawer.Screen name="Settings" component={SettingsPresenter} />
				</Drawer.Navigator>
			</NavigationContainer>
			<StatusBar style={statusBarStyle} />
		</PaperProvider>
	) : (
		<ActivityIndicator animating={true} />
	);
}

AppRegistry.registerComponent(appName, () => Main);
