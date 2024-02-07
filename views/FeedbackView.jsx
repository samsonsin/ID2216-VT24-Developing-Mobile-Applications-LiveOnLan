import * as React from "react";
import {Text, View, TextInput, TouchableOpacity} from 'react-native';


export default function FeedbackView(pwops) {
	return (
		<View className="bg-[#5ef] py-6 h-full">            
                    <View>
                        <View className=" flex-col m-6">
                        <Text className="text-3xl text-center h-12 p-0">Feedback</Text>
                        <Text className="text-xl text-center h-12 p-0">Please enter your feedback below:</Text>
                        <Text className="text-sm text-center h-5 py-0">Device and installation details will be shared,</Text>
                        <TextInput className="text-xl h-3/5 px-6 py-0 border-0 rounded-md bg-white"></TextInput>
                    </View>
                </View>
                <View className="px-16">
                <TouchableOpacity className="h-10 items-center bg-white border-1 rounded-md">
                    <Text className="text-xl text-center">Send feedback</Text>
                </TouchableOpacity>
            </View>
        </View>    
	);
}
