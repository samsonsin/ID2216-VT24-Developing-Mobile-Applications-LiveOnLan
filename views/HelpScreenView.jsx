import * as React from "react";
import { Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function HelpScreenView(pwops) {
	return (
		<View className="bg-[#5ef] py-6 h-full">
                <View>
                        <View className=" flex-col m-6">
                        <Text className="text-xl text-center h-12 p-0">Help</Text>
                        <Text className="text-sm h-4/5 px-6 py-0 border-0 rounded-md bg-white"> 
                        Live on Lan uses both a device’s inherent Wake-On-Lan capabilities coupled with a custom service 
                        running on the target device to offer both wake up and shut down functionality.
                        Wake-On-Lan functionality has to be enabled in the BIOS of the device. 
                        Shutdown functionality requires a app to be installed on the target devices. 
                        This app can be downloaded at https://liveonlan.com/downloads
                        Export / Import functionality allows for saving and restoring app settings.</Text>
                    </View>
                </View>
        </View>
        
	);
}