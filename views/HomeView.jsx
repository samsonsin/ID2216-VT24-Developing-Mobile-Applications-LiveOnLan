import { useState } from "react";
import { View, ScrollView } from "react-native";
import {
	Text,
	IconButton,
	Surface,
	useTheme,
	ActivityIndicator,
	Snackbar,
} from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import AddDevicePresenter from "../presenters/AddDevicePresenter";
import EditDevicePresenter from "../presenters/EditDevicePresenter";
export default function HomeView({
	devices,
	setEditDeviceID,
	sendWoLPacket,
	packet,
}) {
	const theme = useTheme();
	const [snackVisible, setSnackVisible] = useState(false);
	return (
		<>
			<ScrollView className=" w-full h-full flex flex-col gap-4 gap-x-0 overflow-visible">
				{devices ? (
					Object.keys(devices).map((key) =>
						CustomCard(
							key,
							devices[key],
							setEditDeviceID,
							sendWoLPacket,
							theme,
							packet,
							setSnackVisible
						)
					)
				) : (
					<ActivityIndicator animating={true} />
				)}
				<View className="h-10" />
			</ScrollView>
			<AddDevicePresenter />
			<EditDevicePresenter />
			<Snackbar
				visible={snackVisible}
				onDismiss={() => setSnackVisible(false)}
				duration={2000}
			>
				{(packet && "Sent a WoL Packet!") ||
					"Packet Sending Disabled! Check Settings!"}
			</Snackbar>
		</>
	);
}

function CustomCard(
	uniqueKey,
	data,
	setEditDeviceID,
	sendWoLPacket,
	theme,
	packet,
	setSnackVisible
) {
	return (
		<Surface
			elevation={2}
			key={uniqueKey}
			className="rounded-lg top-2 left-2 mr-4"
		>
			<LinearGradient
				className="rounded-lg h-28 flex-column justify-between p-3 pb-0"
				colors={[theme.colors.primaryContainer, theme.colors.surface]}
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
							if (packet)
								sendWoLPacket(data.address, data.mac, data.port, data.secureon);
							setSnackVisible(true);
						}}
					></IconButton>
					<IconButton
						className="opacity-80 w-1/3"
						icon="power-off"
						mode="contained"
						iconColor="red"
						onPress={() => {
							if (packet)
								sendWoLPacket(data.address, data.mac, data.port, data.secureon);
							setSnackVisible(true);
						}}
					></IconButton>
				</View>
			</LinearGradient>
		</Surface>
	);
}
