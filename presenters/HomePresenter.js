import dgram from "react-native-udp";
import HomeView from "../views/HomeView";
import { useStorage, useEditDeviceID, usePacket } from "../model";

function hexToBytes(hex) {
	let bytes = [];
	for (let c = 0; c < hex.length; c += 2)
		bytes.push(parseInt(hex.substr(c, 2), 16));
	return bytes;
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

	const socket = dgram.createSocket("udp4");
	socket.bind(port);
	socket.once("listening", function () {
		socket.send(packet, undefined, undefined, port, adress);
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
