import * as React from "react";
import { View, Text } from 'react-native';
import SettingsView from "../views/SettingsView";

export default function SettingsPresenter(props) {

    const [show, toggle] = React.useState(false);

    const toggleAdvancedSettings = () => {
        toggle((current) => !current);
    };

    return (SettingsView({ show: show, toggle: toggleAdvancedSettings })
    )

}