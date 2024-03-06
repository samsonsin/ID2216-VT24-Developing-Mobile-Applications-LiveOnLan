import { Drawer } from "react-native-paper";
import { View } from "react-native";

export default function DrawerView({ active, setActive }) {
	return active ? (
		<View className="absolute top-0 left-0 bg-gray-500/50 w-screen h-screen">
			<View className="bg-white w-60 h-screen">
				<Drawer.Section title="Some title">
					<Drawer.Item
						label="First Item"
						active={active === "first"}
						onPress={() => setActive("first")}
					/>
					<Drawer.Item
						label="Second Item"
						active={active === "second"}
						onPress={() => setActive("second")}
					/>
				</Drawer.Section>
			</View>
		</View>
	) : (
		false
	);
}
