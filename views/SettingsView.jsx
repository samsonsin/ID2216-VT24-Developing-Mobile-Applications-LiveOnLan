import React, { useState } from "react";
import { Switch, StyleSheet, Text, View, TextInput } from "react-native";

export default function SettingsView(pwops) {
	const [isEnabled, setIsEnabled] = useState(false);
	const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

	const [isEnabled2, setIsEnabled2] = useState(false);
	const toggleSwitch2 = () => setIsEnabled2((previousState) => !previousState);

	return (
		<View className="bg-[#b3e3fc] py-6 h-full">
			<View className="">
				<View style={styles.switchView}>
					<Text className="text-lg h-30 p-0">Amolde mode</Text>
					<Switch
						trackColor={{ false: "#767577", true: "#60BCE0" }}
						thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
						ios_backgroundColor="#3e3e3e"
						onValueChange={toggleSwitch}
						value={isEnabled}
					/>
				</View>
			</View>
			<View className="bg-[#767577] mt-px mb-px ml-2 mr-2 h-1 rounded-lg"></View>
			<View className="">
				<View style={styles.switchView}>
					<Text className="text-lg h-30 p-0">Dark mode</Text>
					<Switch
						trackColor={{ false: "#767577", true: "#60BCE0" }}
						thumbColor={isEnabled2 ? "#f5dd4b" : "#f4f3f4"}
						ios_backgroundColor="#3e3e3e"
						onValueChange={toggleSwitch2}
						value={isEnabled2}
					/>
				</View>
			</View>
			<View className="bg-[#767577] mt-px mb-px ml-2 mr-2 h-1 rounded-lg"></View>
			<View className="">
				<View>
					<View className="bg-[#60BCE0] mt-3 mb-3 ml-2 mr-2 h-2 rounded-lg"></View>
					<Text style={{ textAlign: "center", fontSize: 30 }}>
						Advanced Options
					</Text>
				</View>
				<View style={styles.inputView}>
					<Text className="text-lg h-30 p-0">Placeholder</Text>
					<TextInput style={styles.input}></TextInput>
				</View>
				<View style={styles.inputView}>
					<Text className="text-lg h-30 p-0">Placeholder</Text>
					<TextInput style={styles.input}></TextInput>
				</View>
				<View style={styles.inputView}>
					<Text className="text-lg h-30 p-0">Placeholder</Text>
					<TextInput style={styles.input}></TextInput>
				</View>
				<View style={styles.inputView}>
					<Text className="text-lg h-30 p-0">Placeholder</Text>
					<TextInput style={styles.input}></TextInput>
				</View>
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	inputView: {
		flexDirection: "column",
		margin: 6,
	},

	switchView: {
		flexDirection: "row",
		margin: 6,
		justifyContent: "space-between",
	},

	input: {
		fontSize: 20,

		height: 40,
		paddingHorizontal: 6,
		paddingVertical: 0,

		borderWidth: 1,
		borderRadius: 5,

		backgroundColor: "#fff",
	},
});
