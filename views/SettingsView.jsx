import React, { useState } from "react";
import {
	Switch,
	StyleSheet,
	View,
	TextInput,
	TouchableOpacity,
	ScrollView,
} from "react-native";
import { Text, Surface } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";

export default function SettingsView(pwops) {
	const [isEnabled, setIsEnabled] = useState(false);
	const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

	const [isEnabled2, setIsEnabled2] = useState(false);
	const toggleSwitch2 = () => setIsEnabled2((previousState) => !previousState);

	return (
		<View className="bg-[#fff] h-full">
			<>
				<ScrollView className=" w-full h-full p-4 flex flex-col">
					{/*Simple Options*/}

					<Surface elevation={2} className="rounded-lg top-2 left-2 mr-4">
						<LinearGradient
							className="rounded-lg h-28 flex-column justify-between pt-[32]  pb-0"
							colors={["#b3e3fc", "#e8f4fa"]}
						>
							<View className="flex-row	justify-between m-3	">
								<Text className="text-lg center h-30 p-0">Amolde mode</Text>
								<Switch
									trackColor={{ false: "#767577", true: "#60BCE0" }}
									thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
									ios_backgroundColor="#3e3e3e"
									onValueChange={toggleSwitch}
									value={isEnabled}
								/>
							</View>
							<View className="flex flex-row h-1/2 justify-evenly items-end"></View>
						</LinearGradient>
					</Surface>

					<Surface elevation={2} className="rounded-lg top-2 left-2 mr-4 mt-4">
						<LinearGradient
							className="rounded-lg h-28 flex-column justify-between pt-[32] pb-0"
							colors={["#b3e3fc", "#e8f4fa"]}
						>
							<View className="flex-row justify-between m-3	">
								<Text className="text-lg center h-30 p-0">Dark mode</Text>
								<Switch
									trackColor={{ false: "#767577", true: "#60BCE0" }}
									thumbColor={isEnabled2 ? "#f5dd4b" : "#f4f3f4"}
									ios_backgroundColor="#3e3e3e"
									onValueChange={toggleSwitch2}
									value={isEnabled2}
								/>
							</View>
							<View className="flex flex-row h-1/2 justify-evenly items-end"></View>
						</LinearGradient>
					</Surface>

					<View className="mt-6 mb-2">
						{/*Advanced Options*/}

						{pwops.show ? (
							<>
								<View className="bg-[#b3e3fc] mt-3 mb-5 ml-2 mr-2 h-2 rounded-lg"></View>
								<TouchableOpacity onPress={pwops.toggle}>
									{/*Dividing view*/}
									<Text className="text-[30px] text-center border-[#000] bg-[#e8f4fa] border-2 rounded-lg">
										Hide Advanced Options
									</Text>
								</TouchableOpacity>
								<Surface
									elevation={2}
									className="rounded-lg top-2 left-2 mr-4 mt-4"
								></Surface>
								<Surface
									elevation={2}
									className="rounded-lg top-2 left-2 mr-4 mt-4"
								>
									<LinearGradient
										className="rounded-lg h-28 flex-column justify-between p-3 pb-0"
										colors={["#b3e3fc", "#e8f4fa"]}
									>
										<View className="flex flex-col justify-between items-left">
											<Text className="text-lg">placeholder</Text>
											<TextInput className="text-[20px] h-[45px] p-[6px] border-2 border-[#000] rounded-md"></TextInput>
										</View>
										<View className="flex flex-row h-1/2 justify-evenly items-end"></View>
									</LinearGradient>
								</Surface>
								<Surface
									elevation={2}
									className="rounded-lg top-2 left-2 mr-4 mt-4"
								>
									<LinearGradient
										className="rounded-lg h-28 flex-column justify-between p-3 pb-0"
										colors={["#b3e3fc", "#e8f4fa"]}
									>
										<View className="flex flex-col justify-between items-left">
											<Text className="text-lg">placeholder</Text>
											<TextInput className="text-[20px] h-[45px] p-[6px] border-2 border-[#000] rounded-md"></TextInput>
										</View>
										<View className="flex flex-row h-1/2 justify-evenly items-end"></View>
									</LinearGradient>
								</Surface>
								<Surface
									elevation={2}
									className="rounded-lg top-2 left-2 mr-4 mt-4"
								>
									<LinearGradient
										className="rounded-lg h-28 flex-column justify-between p-3 pb-0"
										colors={["#b3e3fc", "#e8f4fa"]}
									>
										<View className="flex flex-col justify-between items-left">
											<Text className="text-lg">placeholder</Text>
											<TextInput className="text-[20px] h-[45px] p-[6px] border-2 border-[#000] rounded-md"></TextInput>
										</View>
										<View className="flex flex-row h-1/2 justify-evenly items-end"></View>
									</LinearGradient>
								</Surface>
								<Surface
									elevation={2}
									className="rounded-lg top-2 left-2 mr-4 mt-4"
								>
									<LinearGradient
										className="rounded-lg h-28 flex-column justify-between p-3 pb-0"
										colors={["#b3e3fc", "#e8f4fa"]}
									>
										<View className="flex flex-col justify-between items-left">
											<Text className="text-lg">placeholder</Text>
											<TextInput className="text-[20px] h-[45px] p-[6px] border-2 border-[#000] rounded-md"></TextInput>
										</View>
										<View className="flex flex-row h-1/2 justify-evenly items-end"></View>
									</LinearGradient>
								</Surface>
								<Surface
									elevation={2}
									className="rounded-lg top-2 left-2 mr-4 mt-4"
								>
									<LinearGradient
										className="rounded-lg h-28 flex-column justify-between p-3 pb-0"
										colors={["#b3e3fc", "#e8f4fa"]}
									>
										<View className="flex flex-col justify-between items-left">
											<Text className="text-lg">placeholder</Text>
											<TextInput className="text-[20px] h-[45px] p-[6px] border-2 border-[#000] rounded-md"></TextInput>
										</View>
										<View className="flex flex-row h-1/2 justify-evenly items-end"></View>
									</LinearGradient>
								</Surface>
								<View className="h-[85px]"></View>
							</>
						) : (
							<>
								<View className="bg-[#b3e3fc] mt-3 mb-5 ml-2 mr-2 h-2 rounded-lg"></View>
								<TouchableOpacity onPress={pwops.toggle}>
									{/*Dividing view*/}
									<Text className="text-[30px] text-center border-[#000] bg-[#e8f4fa] border-2 rounded-lg">
										Show Advanced Options
									</Text>
								</TouchableOpacity>
							</>
						)}
					</View>
				</ScrollView>
			</>
		</View>
	);
}
