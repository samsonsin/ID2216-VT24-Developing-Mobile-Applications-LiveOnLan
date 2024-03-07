import { ScrollView, View } from "react-native";
import {
	Text,
	Surface,
	SegmentedButtons,
	Button,
	Divider,
	Switch,
} from "react-native-paper";
import { initModel, useThemeType } from "../model";

export default function SettingsView({ setStorage, packet, setPacket }) {
	const [value, setValue] = useThemeType();

	return (
		<>
			<ScrollView className=" rounded-md">
				<Surface elevation={2} className="p-5 m-2 overflow-visible rounded-md">
					<Text variant="headlineSmall" className="self-center">
						Theme
					</Text>
					<SegmentedButtons
						value={value}
						onValueChange={(e) => setValue(e)}
						className="m-2"
						buttons={[
							{
								value: "system",
								label: "System",
							},
							{
								value: "dark",
								label: "Dark",
							},
							{ value: "light", label: "Light" },
						]}
					/>
					<Divider />
					<Button
						icon="reload"
						mode="contained"
						className="self-center m-2"
						onPress={() => {
							setStorage(null).then(() => initModel());
						}}
					>
						Reset Devices
					</Button>
					<View className="flex flex-row justify-between">
						<Text className="w-20">
							Enable sending WoL Packets? May cause crashes!
						</Text>
						<Switch
							className="w-20 "
							value={packet}
							onValueChange={() => setPacket(!packet)}
						/>
					</View>
				</Surface>
			</ScrollView>
		</>
	);
}
