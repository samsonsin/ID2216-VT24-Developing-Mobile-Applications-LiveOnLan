import * as React from "react";
import {View, Text} from 'react-native';
import EditDeviceView from "../views/EditDeviceView";

export default function EditDevicePresenter(props) {
	
    const [show, toggle] = React.useState(false);

    const toggleAdvancedSettings = () => {
        toggle((current) => !current);
    };

    return (EditDeviceView({show: show, toggle: toggleAdvancedSettings})
    )
}