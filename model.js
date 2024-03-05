import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import uuid from "react-native-uuid";

//-------- ReadMe --------
//To use a existing state, import the wrapper function for that state and use it like you would
//a normal React.useState() hook.

//To create a new app-wide state which persists in local storage, define a
//variable name to which a defaultValue and callback list will be associated
//in the dataStruct object. Then write a wrapper to useCustomHook which
//passes the name of the variable you chose.

//Add Variable name, default value and a empty object for callbacks here:
const dataStruct = {
	Example: { defaultValue: [], callbacks: {} },
	editDeviceID: { defaultValue: null, callbacks: {} },
	Data: {
		defaultValue: {
			"11edc52b-2918-4d71-9058-f7285e29d894": {
				displayname: "Test 1",
				mac: "11:22:33:ff:ee",
				port: "21",
				secureon: "11:22:33:ff:ee",
			},
			"11edc52b-2918-4d71-9058-f7285e29d895": {
				displayname: "Test 2",
				mac: "11:22:33:ff:ee",
				port: "21",
				secureon: "11:22:33:ff:ee",
			},
			"11edc52b-2918-4d71-9058-f7285e29d896": {
				displayname: "Test 3",
				mac: "11:22:33:ff:ee",
				port: "21",
				secureon: "11:22:33:ff:ee",
			},
			"11edc52b-2918-4d71-9058-f7285e29d897": {
				displayname: "Test 4",
				mac: "11:22:33:ff:ee",
				port: "21",
				secureon: "11:22:33:ff:ee",
			},
		},
		callbacks: {},
	},
};

//-------- Custom Hooks --------
//These use the useCustomHook, which returns a hook which is subscribed to the given struct.
//These are used to app wide state managment, make sure you define a matching entry in the dataStruct object

//Add your own wrappers here:
export function useExample() {
	return useCustomHook("Example");
}

export function useStorage() {
	return useCustomHook("Data");
}

export function useEditDeviceID() {
	return useCustomHook("editDeviceID");
}

//-------- Public Functions --------

async function wipeStorage() {
	keys = await AsyncStorage.getAllKeys();
	console.log("WIPING ALL STORAGE ENTRIES WITH KEYS: ", keys);
	keys && (await keys.forEach((key) => AsyncStorage.removeItem(key)));
}

async function printStorage() {
	(await AsyncStorage.multiGet(await AsyncStorage.getAllKeys())).forEach((e) =>
		console.log(e)
	);
	console.log(await AsyncStorage.getItem("Data"));
}

//This function is run by App.jsx when mounted. Initialized the model
export function initModel() {
	//If value does not exist in local storage, then load default value
	Object.keys(dataStruct).map((e) => {
		fromLocalStorage(e).then((result) => {
			if (result === null) {
				toLocalStorage(e, dataStruct[e].defaultValue);
			}
		});
	});
	// printStorage();
	// wipeStorage();
	// printStorage();
	//Put subsciption logic here with our own Database
	//
	//  const unsub1 = mySubscribeFunc1(params)
	//  const unsub2 = mySubscribeFunc2(params)
	//  return(()=>{unsub1(); unsub2();})
}

//Read value from local storage.
function fromLocalStorage(target) {
	return AsyncStorage.getItem(target).then((result) => JSON.parse(result));
}

//Write new value to localstorage
function toLocalStorage(target, value) {
	return AsyncStorage.setItem(target, JSON.stringify(value));
}
//-------- Internal funcs --------

export function simpleStorage(target) {
	return [fromLocalStorage(target), (value) => toLocalStorage(target, value)];
}

//Subscribes to the changes on some value with a callback. Returns the unsubscribe function
function subscribeTo(target, callback) {
	// create uid, add it to callbackStruct
	const id = uuid.v4();
	dataStruct[target].callbacks[id] = callback;
	fromLocalStorage(target).then((result) => callback(result));
	return () => {
		//return function that removes field in callbackStruct
		delete dataStruct[target].callbacks[id];
	};
}

// Sets a new value for target and calls its callbacks
function setValue(target, value) {
	toLocalStorage(target, value).then(() => callStruct(target));
}

//calls the callbacks of some target.
function callStruct(target) {
	//check if object is empty first.
	Object.keys(dataStruct[target].callbacks).length == 0
		? console.error(
				`Model Value: ${target}: No callbacks; Use the Custom Hooks`
		  )
		: //If there are some callbacks, call them all
		  Object.values(dataStruct[target].callbacks).forEach((e) =>
				fromLocalStorage(target).then((result) => {
					e(result);
				})
		  );
}

//Creates a useState hook that subscribes to model 'target' and updates model & any other states on the same target if changed
function useCustomHook(target) {
	const [val, setVal] = useState(null);
	useEffect(() => {
		return subscribeTo(target, (e) => {
			setVal(e);
		});
	}, []);
	return [val, (e) => setValue(target, e)];
}
