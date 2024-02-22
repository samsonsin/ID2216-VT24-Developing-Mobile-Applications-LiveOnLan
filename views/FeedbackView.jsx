import * as React from "react";
import { Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";

export default function FeedbackView(pwops) {
	const [text, setText] = React.useState("");

	return (
		<View className="bg-[#b3e3fc] py-6 h-full">
			<View>
				<View className=" flex-col m-6">
					<Text className="text-lg text-center h-10 ">
						Here you can send in feedback
					</Text>
					<Text className="text-sm text-center h-10 ">
						Device and installation details will be shared,
					</Text>
					<TextInput
						label="Enter feedback"
						multiline={true}
						value={text}
						mode="outlined"
						onChangeText={(text) => setText(text)}
					/>
				</View>
				<Button mode="elevated" className=" bottom-0 mt-6 self-center">
					Send feedback
				</Button>
			</View>
		</View>
	);
}
