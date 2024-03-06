import { useState, useEffect } from "react";
import { View, ScrollView } from "react-native";
//import  from "react-native-paper";
import {
	TextInput,
	Surface,
	Button,
	Modal,
	IconButton,
	useTheme,
} from "react-native-paper";

export default function EditDeviceView({
	mydata,
	editDeviceID,
	setEditDeviceID,
	showAdvancedSettings,
	setShowAdvancedSettings,
	editDevice,
}) {
	const [displayName, setDisplayname] = useState("");
	const [address, setAddress] = useState("");
	const [mac, setMac] = useState("");
	const [port, setPort] = useState("");
	const [secureon, setSecureon] = useState("");
	const theme = useTheme();

	useEffect(() => {
		if (mydata && editDeviceID) {
			setDisplayname(mydata[editDeviceID].displayname);
			setAddress(mydata[editDeviceID].address);
			setMac(mydata[editDeviceID].mac);
			setPort(mydata[editDeviceID].port);
			setSecureon(mydata[editDeviceID].secureon);
		}
	}, [mydata, editDeviceID]);

	return (
		<>
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

						<View className="flex flex-row justify-between items-center">
							<IconButton
								icon="delete"
								mode="contained"
								iconColor={theme.colors.error}
								onPress={() => {
									setEditDeviceID(null);
									editDevice(true, editDeviceID);
								}}
							>
								Delete Device
							</IconButton>
							<Button
								icon="plus"
								mode="elevated"
								className="grow"
								onPress={() => {
									editDevice(
										false,
										editDeviceID,
										displayName,
										address,
										mac,
										port,
										secureon
									);
									setEditDeviceID(null);
								}}
							>
								Save Changes
							</Button>
						</View>
					</Surface>
				</ScrollView>
			</Modal>
		</>
	);
}
