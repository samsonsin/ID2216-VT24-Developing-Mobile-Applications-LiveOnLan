import * as React from "react";
import { Button, StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, ScrollView } from 'react-native';
//import  from "react-native-paper";

export default function AddDeviceView(pwops) {
	return (
		<View className="bg-[#5ef] py-6 h-full">
            {/*<ScrollView className="h-20"
                contentContainerStyle={{
                    flex: 1,
                    justifyContent: 'space-between'}}
                >*/}
                <View>{/*Simple Options*/}
                    <View style={styles.inputView}>
                        <Text style={styles.inputTitle}>Device Name</Text>
                        <TextInput style={styles.input}></TextInput>
                    </View>
                    <View style={styles.inputView}>
                        <Text style={styles.inputTitle}>MAC Address</Text>
                        <TextInput style={styles.input}></TextInput>
                    </View>
                </View>
                <View>{/*Advanced Options*/}
                    <View>{/*Dividing view*/}
                        <View className="bg-[#4cd] mt-3 mb-3 ml-2 mr-2 h-2 rounded-lg"></View>
                        <Text style={{textAlign: "center", fontSize: 30,}}>Advanced Options</Text>
                    </View>
                    <View style={styles.inputView}>
                        <Text style={styles.inputTitle}>Port</Text>
                        <TextInput style={styles.input}></TextInput>
                    </View>
                    <View style={styles.inputView}>
                        <Text style={styles.inputTitle}>SecureOn Password</Text>
                        <TextInput style={styles.input}></TextInput>
                    </View>
                    <View style={styles.inputView}>
                        <Text style={styles.inputTitle}>placeholder</Text>
                        <TextInput style={styles.input}></TextInput>
                    </View>
                    <View style={styles.inputView}>
                        <Text style={styles.inputTitle}>placeholder</Text>
                        <TextInput style={styles.input}></TextInput>
                    </View>
                    
                </View>
                {/*</ScrollView>*/}
            <View className="px-16">
                <TouchableOpacity style={styles.button}>
                    <Text style={{fontSize: 25, color: "#000"}}>Add Device</Text>
                </TouchableOpacity>
            </View>
        </View>
        
	);
}
const styles = StyleSheet.create({
    button: {
        height: "40",
        alignItems: 'center',

        backgroundColor: "#fff",
        borderWidth: 2, 
        borderRadius: 20,
        borderColor: "#000",
    },
    inputView: {
        flexDirection: "column",
        margin: 6,
    },
    inputTitle: {
        fontSize: 18,

        height: 30,
        padding: 0,
    },
    input: {
        fontSize: 20,

        height: 40,
        paddingHorizontal: 6,
        paddingVertical: 0,

        borderWidth: 1,
        borderRadius: 5,

        backgroundColor: '#fff',
    }
  });