import * as React from "react";
import HomeView from "../views/HomeView";
import { templateStruct } from "../dummydata";
import { useStorage, useEditDeviceID } from "../model";

export default function HomePresenter(props) {
	const [editDeviceID, setEditDeviceID] = useEditDeviceID();
	const [data, setData] = useStorage();
	return HomeView({
		devices: data,
		navigation: props.navigation,
		setEditDeviceID,
	});
}
