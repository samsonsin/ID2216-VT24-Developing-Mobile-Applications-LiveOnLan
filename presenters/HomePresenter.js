import * as React from "react";
import HomeView from "../views/HomeView";
import { templateStruct } from "../dummydata";

export default function HomePresenter(props) {
	return HomeView({ devices: templateStruct, navigation: props.navigation });
}
