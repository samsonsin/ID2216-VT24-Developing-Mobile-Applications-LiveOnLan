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

export default function HomeView({
	devices,
	navigation,
	setEditDeviceID,
	sendWoLPacket,
}) {
	return (
		<>
			<ScrollView className=" w-full h-full flex flex-col gap-4 gap-x-0 overflow-visible">
				{devices ? (
					Object.keys(devices).map((key) =>
						CustomCard(key, devices[key], setEditDeviceID, sendWoLPacket)
					)
				) : (
					<View />
				)}
				<View className="h-10" />
			</ScrollView>
		</>
	);
}

function CustomCard(uniqueKey, data, setEditDeviceID, sendWoLPacket) {
	return (
		<Surface
			elevation={2}
			key={uniqueKey}
			className="rounded-lg top-2 left-2 mr-4"
		>
			<LinearGradient
				className="rounded-lg h-28 flex-column justify-between p-3 pb-0"
				colors={["#b3e3fc", "#e8f4fa"]}
			>
				<View className="flex flex-row justify-between items-center">
					<View className="w-10"></View>
					<Text className="text-lg">{data.displayname}</Text>
					<IconButton
						className=""
						icon="dots-vertical"
						mode="default"
						onPress={() => setEditDeviceID(uniqueKey)}
					></IconButton>
				</View>
				<View className="flex flex-row h-1/2 justify-evenly items-end">
					<IconButton
						className="opacity-80 w-1/3"
						icon="power"
						mode="contained"
						onPress={() => {
							console.log("Sending packets are currently disabled...");
							// sendWoLPacket(data.address, data.mac, data.port, data.secureon)
						}}
					></IconButton>
					<IconButton
						className="opacity-80 w-1/3"
						icon="power-off"
						mode="contained"
						iconColor="red"
						onPress={() => {
							console.log("Sending packets are currently disabled...");
							// sendWoLPacket(data.address, data.mac, data.port, data.secureon)
						}}
					></IconButton>
				</View>
			</LinearGradient>
		</Surface>
	);
}
