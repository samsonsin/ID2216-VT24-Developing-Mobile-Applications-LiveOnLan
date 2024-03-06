import { useState } from "react";
import { View, ScrollView } from "react-native";
//import  from "react-native-paper";
import {
	TextInput,
	Surface,
	Button,
	Modal,
	ActivityIndicator,
} from "react-native-paper";

export default function AddDeviceView({
	modalVisibility,
	setModalVisibility,
	showAdvancedSettings,
	setShowAdvancedSettings,
	createDevice,
}) {
	const [displayName, setDisplayname] = useState("");
	const [address, setAddress] = useState("192.168.1.255");
	const [mac, setMac] = useState("");
	const [port, setPort] = useState("9");
	const [secureon, setSecureon] = useState("");
	return (
		<>
			<Modal
				visible={modalVisibility}
				onDismiss={() => setModalVisibility(false)}
			>
				<ScrollView className="m-5 rounded-md">
					<Surface
						elevation={2}
						className="p-5 m-5 overflow-visible rounded-md space-y-2"
					>
						<TextInput
							mode="outlined"
							label="Device Name"
							value={displayName}
							onChangeText={(text) => setDisplayname(text)}
						/>
						<TextInput
							mode="outlined"
							label="Address"
							value={address}
							onChangeText={(text) => setAddress(text)}
						/>
						<TextInput
							mode="outlined"
							label="Mac Address"
							value={mac}
							onChangeText={(text) => setMac(text)}
						/>
						<Button
							mode="contained"
							className="w-auto"
							onPress={() => setShowAdvancedSettings(!showAdvancedSettings)}
						>
							Show Advanced Settings
						</Button>
						{showAdvancedSettings ? (
							<>
								<TextInput
									mode="outlined"
									label="Port"
									value={port}
									onChangeText={(text) => setPort(text)}
								/>
								<TextInput
									mode="outlined"
									label="SecureOn Password"
									value={secureon}
									onChangeText={(text) => setSecureon(text)}
								/>
							</>
						) : (
							<View className="hidden" />
						)}
						<Button
							icon="plus"
							mode="elevated"
							className=""
							onPress={() => {
								createDevice(displayName, address, mac, port, secureon);
								setModalVisibility(false);
							}}
						>
							Add New Device
						</Button>
					</Surface>
				</ScrollView>
			</Modal>
			{modalVisibility ? (
				<ActivityIndicator animating={true} />
			) : (
				<Button
					icon="plus"
					mode="elevated"
					className="absolute bottom-0 m-5 self-center"
					onPress={() => setModalVisibility(true)}
				>
					Add New Device
				</Button>
			)}
		</>
	);
}
