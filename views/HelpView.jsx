import * as React from "react";
import { Text, View } from "react-native";
import { TextInput } from "react-native-paper";

export default function HelpView(pwops) {
	return (
		<View className="bg-[#b3e3fc] py-6 h-full">
			<View>
				<View className=" flex-col m-6">
					<Text className="text-lg text-center h-10 ">
						Information about Live on Lan
					</Text>
					<TextInput
						className="place-content-center"
						multiline={true}
						editable={false}
						mode="outlined"
						value={
							"Live on Lan uses both a device’s inherent Wake-On-Lan capabilities coupled with a custom service running on the target device to offer both wake up and shut down functionality. \n\nWake-On-Lan functionality has to be enabled in the BIOS of the device. \n\nShutdown functionality requires a app to be installed on the target devices. This app can be downloaded at \nhttps://liveonlan.com/downloads \n\nExport / Import functionality allows for saving and restoring app settings."
						}
					/>
				</View>
			</View>
		</View>
	);
}
