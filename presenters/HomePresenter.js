import dgram from "react-native-udp";
import HomeView from "../views/HomeView";
import { useStorage, useEditDeviceID, usePacket } from "../model";

function hexToBytes(hex) {
	let bytes = [];
	for (let c = 0; c < hex.length; c += 2)
		bytes.push(parseInt(hex.substr(c, 2), 16));
	return bytes;
}

function randomPort() {
	return (Math.random() * 60536) | (0 + 5000); // 60536-65536
}

function sendWoLPacket(adress, mac, port, secureon) {
	macInt = hexToBytes(mac.replace(/:/g, ""));
	packet = [255, 255, 255, 255, 255, 255];
	for (let i = 0; i < 16; i++) packet.push(...macInt);
	if (secureon) {
		secureonInt = [..."securepassword"].map(
			(e) => hexToBytes(e.charCodeAt(0).toString(16))[0]
		);
		packet.push(...secureonInt);
	}
	console.log("test", packet);
	console.log("func call", packet, 0, packet.length, port, adress);

	let a = dgram.createSocket("udp4");
	let aPort = randomPort();
	a.bind(aPort, function (err) {
		if (err) throw err;
	});

	a.once("listening", function () {
		a.send(packet, undefined, undefined, port, adress, function (err) {
			if (err) throw err;
		});
	});
}
export default function HomePresenter(props) {
	const [packet, setPacket] = usePacket();
	const [editDeviceID, setEditDeviceID] = useEditDeviceID();
	const [data, setData] = useStorage();
	return HomeView({
		devices: data,
		navigation: props.navigation,
		setEditDeviceID,
		sendWoLPacket,
		packet,
	});
}
