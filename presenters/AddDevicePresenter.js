import * as React from "react";
import { View, Text } from "react-native";
import AddDeviceView from "../views/AddDeviceView";
import { useStorage, test } from "../model";
import uuid from "react-native-uuid";

export default function AddDevicePresenter(props) {
	const [show, toggle] = React.useState(false);

	const toggleAdvancedSettings = () => {
		toggle((current) => !current);
	};

	const [mydata, setMydata] = useStorage();
	const [testing, settesting] = test();

	function createDevice(displayname, mac, port, secureon) {
		id = uuid.v4();
		// console.log({ id, displayname, mac, port, secureon });
		// console.log("IN COMPONENT", mydata);
		settesting({ id, displayname, mac, port, secureon });
		console.log(testing);
	}

	return AddDeviceView({
		show: show,
		toggle: toggleAdvancedSettings,
		createDevice,
	});
}
