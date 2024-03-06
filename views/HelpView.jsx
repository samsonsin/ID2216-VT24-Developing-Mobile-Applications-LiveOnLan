import * as React from "react";
import { Linking, ScrollView } from "react-native";
import { Surface, Text, useTheme } from "react-native-paper";

export default function HelpView(pwops) {
	const theme = useTheme();
	return (
		<>
			<ScrollView className="rounded-md">
				<Surface
					elevation={2}
					className="p-5 m-5 mb-0 overflow-visible rounded-md"
				>
					<Text variant="headlineMedium" className="self-center">
						Contact
					</Text>
					<Text>
						If you're having issues with the app, have got some feedback or
						otherwise would like to contact the Developer of this application;
						then please contact us via this email address:
					</Text>
					<Text
						style={{ color: "blue" }}
						onPress={() => Linking.openURL("mailto:emblad@kth.se")}
					>
						emblad@kth.se
					</Text>
				</Surface>
				<Surface
					elevation={2}
					className="p-5 m-5 mb-0 overflow-visible rounded-md"
				>
					<Text variant="headlineMedium" className="self-center">
						How does WoL work?
					</Text>
					<Text>
						Wake-on-Lan is a technology integrated in virtually all internet
						enabled devices. While available on all ethernet connected devices,
						even some modern WiFi enabled devices boast support for WoL.
					</Text>
					<Text>
						When a device wants to use Wake-on-Lan, it constructs a specific UDP
						Datagram packet which is sent to either a destination IP address or
						broadcast accross the local LAN. A recieving device, when shutdown,
						will still investigate all arriving packets. If a correctly encoded
						WoL packet arrives, the NIC will power on the device.
					</Text>
				</Surface>
				<Surface elevation={2} className="p-5 m-5 overflow-visible rounded-md">
					<Text variant="headlineMedium" className="self-center">
						How do i enable WoL?
					</Text>
					<Text>
						Wake-on-Lan often need to be enabled at the BIOS level of a given
						device. Usually, this particular option is found under for example
						"onboard devices", "PCIe devices" or a similar location.
						Alternatively, some devices either allow or need WoL to be enabled
						though drivers. These settings can be accessed through the
						properties window of the given device within your operating system.
					</Text>
					<Text>
						Detailed information can be found for your given device and / or
						operating system online:
					</Text>
					<Text
						style={{ color: "blue" }}
						onPress={() =>
							Linking.openURL(
								"https://www.google.com/search?q=how+to+turn+on+Wake-on-Lan"
							)
						}
					>
						How to turn on Wake-on-Lan
					</Text>
				</Surface>
			</ScrollView>
		</>
	);
}
