import SettingsView from "../views/SettingsView";
import { useStorage, usePacket } from "../model";

export default function SettingsPresenter(props) {
	const [storage, setStorage] = useStorage();
	const [packet, setPacket] = usePacket();

	return SettingsView({ setStorage, packet, setPacket });
}
