import * as React from "react";
import { Appbar } from "react-native-paper";

export default function TopbarView() {
	return (
		<Appbar.Header>
			<Appbar.BackAction onPress={() => {}} />
			<Appbar.Content title="LiveOnLan" />
			<Appbar.Action icon="calendar" onPress={() => {}} />
			<Appbar.Action icon="magnify" onPress={() => {}} />
		</Appbar.Header>
	);

}
