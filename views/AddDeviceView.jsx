import * as React from "react";
import { StyleSheet, View, SafeAreaView, TextInput, TouchableOpacity, ScrollView } from 'react-native';
//import  from "react-native-paper";
import {
    Text,
	Appbar,
	Avatar,
	IconButton,
	Card,
	Surface,
	Button,
} from "react-native-paper";


export default function AddDeviceView(pwops) {
    
	return (
		<View className="bg-[#b3e3fc]  h-full">
           <>
			<ScrollView className=" w-full h-full p-4 flex flex-col">
            <View className="">{/*Simple Options*/}
                    <View className="flex-direction: column m-2">
                        <Text className="text-[18px]">Device Name</Text>
                        <TextInput className="text-[20px] h-[45px] p-[6px] border-2 border-[#000] rounded-md"></TextInput>
                    </View>
                    <View className="flex-direction: column m-2">
                        <Text className="text-[18px]">MAC Address</Text>
                        <TextInput className="text-[20px] h-[45px] p-[6px] border-2 border-[#000] rounded-md"></TextInput>
                    </View>
                </View>
                <View className="">{/*Advanced Options*/}
                    
                    {pwops.show
                    ? 
                    <>
                    <TouchableOpacity onPress={pwops.toggle}>{/*Dividing view*/}
                        <View className="bg-[#60BCE0] mt-3 mb-3 ml-2 mr-2 h-2 rounded-lg"></View>
                        <Text className="text-[30px] text-center">Hide Advanced Options</Text>
                    </TouchableOpacity>
                        <View className="flex-direction: column m-2">
                            <Text className="text-[18px]">Port</Text>
                            <TextInput className="text-[20px] h-[45px] p-[6px] border-2 border-[#000] rounded-md"></TextInput>
                        </View>
                        <View className="flex-direction: column m-2">
                            <Text className="text-[18px]">SecureOn Password</Text>
                            <TextInput className="text-[20px] h-[45px] p-[6px] border-2 border-[#000] rounded-md"></TextInput>
                        </View>
                        <View className="flex-direction: column m-2">
                            <Text className="text-[18px]">placeholder</Text>
                            <TextInput className="text-[20px] h-[45px] p-[6px] border-2 border-[#000] rounded-md"></TextInput>
                        </View>
                        <View className="flex-direction: column m-2">
                            <Text className="text-[18px]">placeholder</Text>
                            <TextInput className="text-[20px] h-[45px] p-[6px] border-2 border-[#000] rounded-md"></TextInput>
                        </View>
                        <View className="flex-direction: column m-2">
                            <Text className="text-[18px]">placeholder</Text>
                            <TextInput className="text-[20px] h-[45px] p-[6px] border-2 border-[#000] rounded-md"></TextInput>
                        </View>
                        <View className="flex-direction: column m-2">
                            <Text className="text-[18px]">placeholder</Text>
                            <TextInput className="text-[20px] h-[45px] p-[6px] border-2 border-[#000] rounded-md"></TextInput>
                        </View>
                        <View className="flex-direction: column m-2">
                            <Text className="text-[18px]">placeholder</Text>
                            <TextInput className="text-[20px] h-[45px] p-[6px] border-2 border-[#000] rounded-md"></TextInput>
                        </View>
                        <View className="flex-direction: column m-2">
                            <Text className="text-[18px]">placeholder</Text>
                            <TextInput className="text-[20px] h-[45px] p-[6px] border-2 border-[#000] rounded-md"></TextInput>
                        </View>
                        <View className="h-[85px]"></View>
                    </>
                    :
                    <>
                    <TouchableOpacity onPress={pwops.toggle}>{/*Dividing view*/}
                        <View className="bg-[#60BCE0] mt-3 mb-3 ml-2 mr-2 h-2 rounded-lg"></View>
                        <Text className="text-[30px] text-center">Show Advanced Options</Text>
                    </TouchableOpacity>
                    </>
                    }
                </View>
                
                
			</ScrollView>
			<Button
				icon="check"
				mode="elevated"
				className="absolute bottom-0 m-5 self-center"
            >Add Device</Button>
		</>
        
        
            
        </View>
        
	);
}