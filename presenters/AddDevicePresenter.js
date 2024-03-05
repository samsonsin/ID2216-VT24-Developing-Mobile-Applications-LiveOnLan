import * as React from "react";
import { View, Text } from "react-native";
import AddDeviceView from "../views/AddDeviceView";
import { useStorage } from "../model";
import uuid from "react-native-uuid";

export default function AddDevicePresenter(props) {
	const [show, toggle] = React.useState(false);

	const toggleAdvancedSettings = () => {
		toggle((current) => !current);
	};

	const [mydata, setMydata] = useStorage();

	function createDevice(displayname, mac, port, secureon) {
		id = uuid.v4();
		setMydata({ ...mydata, [id]: { displayname, mac, port, secureon } });
	}

	return AddDeviceView({
		show: show,
		toggle: toggleAdvancedSettings,
		createDevice,
	});
}
