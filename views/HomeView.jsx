import * as React from "react";
import { View, ImageBackground, Image, ScrollView } from "react-native";
import {
	Appbar,
	Text,
	Avatar,
	IconButton,
	Card,
	Surface,
	Button,
} from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";

import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
	default: "native",
});

export default function HomeView({ devices, navigation }) {
	return (
		<>
			<ScrollView className=" w-full h-full p-2 flex flex-col gap-2 gap-x-0">
				{devices.map((element) => {
					return CustomCard(element, navigation);
				})}
			</ScrollView>
			<Button
				icon="plus"
				mode="elevated"
				className="absolute bottom-0 m-5 self-center"
				onPress={() => navigation.navigate("Add Device Screen")}
			>
				Add New Device
			</Button>
		</>
	);
}

function CustomCard(data, navigation) {
	return (
		<LinearGradient
			key={data.id}
			className="rounded-lg h-32 flex-column justify-between p-3 pb-0"
			colors={["#b3e3fc", "#e8f4fa"]}
		>
			<View className="flex flex-row justify-between items-center">
				<View className="w-10"></View>
				<Text className="text-lg">{data.name}</Text>
				<IconButton
					className=""
					icon="dots-vertical"
					mode="default"
					onPress={() => navigation.navigate("Edit Device Screen")}
				></IconButton>
			</View>
			<View className="flex flex-row h-1/2 justify-evenly items-end">
				<IconButton
					className="grow"
					icon="power"
					mode="outlined"
					onPress={() => console.log("Pressed")}
				></IconButton>
				<IconButton
					className="grow"
					icon="power-off"
					mode="outlined"
					onPress={() => console.log("Pressed")}
				></IconButton>
			</View>
		</LinearGradient>
	);
}
