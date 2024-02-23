import * as React from "react";
import {View, Text} from 'react-native';
import AddDeviceView from "../views/AddDeviceView";

export default function AddDevicePresenter(props) {
	
    const [show, toggle] = React.useState(false);

    const toggleAdvancedSettings = () => {
        toggle((current) => !current);
    };

    return (AddDeviceView({show: show, toggle: toggleAdvancedSettings})
    )
}