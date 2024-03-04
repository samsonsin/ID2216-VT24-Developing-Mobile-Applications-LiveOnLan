import * as React from "react";
import HomeView from "../views/HomeView";
import { templateStruct } from "../dummydata";
import { useStorage } from "../model";

export default function HomePresenter(props) {
	const [data, setData] = useStorage();
	return HomeView({ devices: data, navigation: props.navigation });
}
