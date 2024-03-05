import * as React from "react";
import { View, Text } from "react-native";
import AddDeviceView from "../views/AddDeviceView";
import { useStorage } from "../model";
import uuid from "react-native-uuid";
import { useState } from "react";

export default function AddDevicePresenter(props) {
	const [showAdvancedSettings, setShowAdvancedSettings] = React.useState(false);
	const [modalVisibility, setModalVisibility] = useState(false);
	const [mydata, setMydata] = useStorage();

	function createDevice(displayname, mac, port, secureon) {
		id = uuid.v4();
		setMydata({ ...mydata, [id]: { displayname, mac, port, secureon } });
	}

	return AddDeviceView({
		modalVisibility,
		setModalVisibility,
		showAdvancedSettings,
		setShowAdvancedSettings,
		createDevice,
	});
}
