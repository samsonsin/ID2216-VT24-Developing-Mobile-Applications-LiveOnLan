import * as React from "react";
import {View, Text} from 'react-native';
import EditDeviceView from "../views/EditDeviceView";

export default function EditDevicePresenter(props) {
	
    return (
        <View>
            <EditDeviceView
                text = {"hello world3"}

                >
            </EditDeviceView>
        </View>
    )
}