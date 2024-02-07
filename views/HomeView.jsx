import * as React from "react";
import { View, ImageBackground, Image, ScrollView } from "react-native";
import {
	Appbar,
	Text,
	Avatar,
	IconButton,
	Card,
	Surface,
} from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";

export default function HomeView({ devices }) {
	return (
		<ScrollView className=" w-full h-full p-2 flex flex-col gap-2 gap-x-0">
			{devices.map((element) => {
				return CustomCard(element);
			})}
		</ScrollView>
	);
}

function CustomCard(data) {
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
					onPress={() => console.log("Pressed")}
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
