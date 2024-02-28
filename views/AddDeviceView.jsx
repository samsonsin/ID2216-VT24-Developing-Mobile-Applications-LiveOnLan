import * as React from "react";
import {
	StyleSheet,
	View,
	SafeAreaView,
	TouchableOpacity,
	ScrollView,
} from "react-native";
//import  from "react-native-paper";
import { Text, TextInput, Surface, Button } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";

export default function AddDeviceView(props) {
	const [displayName, setDisplayname] = React.useState("");

	return (
		<View className="bg-[#fff] h-full">
			<>
				<ScrollView className=" w-full h-full p-4 flex flex-col">
					<View className="">
						{/*Simple Options*/}

						<Surface elevation={2} className="rounded-lg top-2 left-2 mr-4">
							<LinearGradient
								className="rounded-lg h-28 flex-column justify-between p-3 pb-0"
								colors={["#b3e3fc", "#e8f4fa"]}
							>
								<View className="flex flex-col justify-between items-left">
									<TextInput
										mode="outlined"
										label="Device Name"
										value={displayName}
										onChangeText={(text) => setDisplayname(text)}
									/>
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
									<Text className="text-lg">MAC Address</Text>
									<TextInput className="text-[20px] h-[45px] p-[6px] border-2 border-[#000] rounded-md"></TextInput>
								</View>
								<View className="flex flex-row h-1/2 justify-evenly items-end"></View>
							</LinearGradient>
						</Surface>
					</View>
					<View className="mt-6 mb-2">
						{/*Advanced Options*/}

						{props.show ? (
							<>
								<View className="bg-[#b3e3fc] mt-3 mb-5 ml-2 mr-2 h-2 rounded-lg"></View>
								<TouchableOpacity onPress={props.toggle}>
									{/*Dividing view*/}
									<Text className="text-[30px] text-center border-[#000] bg-[#e8f4fa] border-2 rounded-lg">
										Hide Advanced Options
									</Text>
								</TouchableOpacity>
								<Surface
									elevation={2}
									className="rounded-lg top-2 left-2 mr-4 mt-4"
								>
									<LinearGradient
										className="rounded-lg h-28 flex-column justify-between p-3 pb-0"
										colors={["#b3e3fc", "#e8f4fa"]}
									>
										<View className="flex flex-col justify-between items-left">
											<Text className="text-lg">Port</Text>
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
											<Text className="text-lg">SecureOn Password</Text>
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
								<TouchableOpacity onPress={props.toggle}>
									{/*Dividing view*/}
									<Text className="text-[30px] text-center border-[#000] bg-[#e8f4fa] border-2 rounded-lg">
										Show Advanced Options
									</Text>
								</TouchableOpacity>
							</>
						)}
					</View>
				</ScrollView>
				<Button
					icon="check"
					mode="elevated"
					className="absolute bottom-0 m-5 self-center"
					onPress={() => props.createDevice(displayName, "0", "0", "0")}
				>
					Add Device
				</Button>
			</>
		</View>
	);
}
