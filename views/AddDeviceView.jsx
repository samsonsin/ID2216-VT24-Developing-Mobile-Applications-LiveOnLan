import * as React from "react";
import {
	StyleSheet,
	View,
	SafeAreaView,
	TouchableOpacity,
	ScrollView,
} from "react-native";
//import  from "react-native-paper";
import {
	Text,
	TextInput,
	Surface,
	Button,
	Portal,
	Modal,
} from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";

export default function AddDeviceView({
	modalVisibility,
	setModalVisibility,
	showAdvancedSettings,
	setShowAdvancedSettings,
	createDevice,
}) {
	const [displayName, setDisplayname] = React.useState("");
	const [mac, setMac] = React.useState("");
	const [port, setPort] = React.useState("");
	const [secureon, setSecureon] = React.useState("");
	return (
		<>
			<Portal>
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
								label="Mac Address"
								value={mac}
								onChangeText={(text) => setMac(text)}
							/>
							<Button
								mode="contained"
								className="w-auto"
								onPress={() => setShowAdvancedSettings(!showAdvancedSettings)}
							>
								Show Advanved Settings
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
									createDevice(displayName, mac, port, secureon);
									setModalVisibility(false);
								}}
							>
								Add New Device
							</Button>
						</Surface>
					</ScrollView>
				</Modal>
			</Portal>
			<Button
				icon="plus"
				mode="elevated"
				className="absolute bottom-0 m-5 self-center"
				onPress={() => setModalVisibility(true)}
			>
				Add New Device
			</Button>
		</>
	);
}
