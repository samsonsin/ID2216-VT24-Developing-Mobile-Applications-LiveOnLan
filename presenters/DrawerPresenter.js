import * as React from "react";
import DrawerView from "../views/DrawerView";

export default function DrawerPresenter(props) {
	const [active, setActive] = React.useState(false);
	return DrawerView({ active: active, setActive: setActive });
}
