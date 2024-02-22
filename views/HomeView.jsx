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
	Drawer,
} from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";

export default function HomeView({ devices, navigation }) {
	return (
		<>
			<ScrollView className=" w-full h-full flex flex-col gap-4 gap-x-0">
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
		<Surface
			elevation={2}
			key={data.id}
			className="rounded-lg top-2 left-2 mr-4"
		>
			<LinearGradient
				key={data.id}
				className="rounded-lg h-28 flex-column justify-between p-3 pb-0"
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
						className="opacity-80 w-1/3"
						icon="power"
						mode="contained"
						onPress={() => console.log("Pressed")}
					></IconButton>
					<IconButton
						className="opacity-80 w-1/3"
						icon="power-off"
						mode="contained"
						iconColor="red"
						onPress={() => console.log("Pressed")}
					></IconButton>
				</View>
			</LinearGradient>
		</Surface>
	);
}
