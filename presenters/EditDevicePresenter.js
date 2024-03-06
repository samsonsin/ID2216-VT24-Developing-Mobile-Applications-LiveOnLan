import * as React from "react";
import EditDeviceView from "../views/EditDeviceView";
import { useStorage, useEditDeviceID } from "../model";

export default function EditDevicePresenter(props) {
	const [showAdvancedSettings, setShowAdvancedSettings] = React.useState(false);
	const [mydata, setMydata] = useStorage();
	const [editDeviceID, setEditDeviceID] = useEditDeviceID();

	function editDevice(remove, id, displayname, address, mac, port, secureon) {
		if (remove) {
			const oldData = { ...mydata };
			delete oldData[id];
			return setMydata(oldData);
		}
		return setMydata({
			...mydata,
			[id]: { displayname, address, mac, port, secureon },
		});
	}

	return EditDeviceView({
		mydata,
		editDeviceID,
		setEditDeviceID,
		showAdvancedSettings,
		setShowAdvancedSettings,
		editDevice,
	});
}
