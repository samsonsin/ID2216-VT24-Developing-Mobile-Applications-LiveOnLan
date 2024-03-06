import SettingsView from "../views/SettingsView";
import { useStorage } from "../model";

export default function SettingsPresenter(props) {
	const [storage, setStorage] = useStorage();

	return SettingsView({ setStorage });
}
