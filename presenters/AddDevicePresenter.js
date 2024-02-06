import * as React from "react";
import {View, Text} from 'react-native';
import AddDeviceView from "../views/AddDeviceView";

export default function AddDevicePresenter(props) {
	
    return (
        <View>
            <AddDeviceView
                text = {"hello world2"}

                >
            </AddDeviceView>
        </View>
    )
}