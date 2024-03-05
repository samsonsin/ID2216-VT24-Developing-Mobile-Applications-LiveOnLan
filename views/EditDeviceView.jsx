import { useState, useEffect } from "react";
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

export default function EditDeviceView({
	mydata,
	editDeviceID,
	setEditDeviceID,
	showAdvancedSettings,
	setShowAdvancedSettings,
	editDevice,
}) {
	const [displayName, setDisplayname] = useState("");
	const [mac, setMac] = useState("");
	const [port, setPort] = useState("");
	const [secureon, setSecureon] = useState("");

	useEffect(() => {
		if (mydata && editDeviceID) {
			setDisplayname(mydata[editDeviceID].displayname);
			setMac(mydata[editDeviceID].mac);
			setPort(mydata[editDeviceID].port);
			setSecureon(mydata[editDeviceID].secureon);
		}
	}, [mydata, editDeviceID]);

	return (
		<>
			<Portal>
				<Modal visible={editDeviceID} onDismiss={() => setEditDeviceID(null)}>
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
									editDevice(
										false,
										editDeviceID,
										displayName,
										mac,
										port,
										secureon
									);
									setEditDeviceID(null);
								}}
							>
								Save Changes
							</Button>
						</Surface>
					</ScrollView>
				</Modal>
			</Portal>
		</>
	);
}
