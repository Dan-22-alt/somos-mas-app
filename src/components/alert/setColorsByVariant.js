import React from "react";
import { CheckIcon, InfoOutlineIcon, WarningIcon } from "@chakra-ui/icons";

const setColorsByVariant = ({ type, setVariant }) => {
	const style = {
		w: 10,
		h: 10,
	};

	switch (type) {
		case "success":
			setVariant(() => ({
				Icon: <CheckIcon {...style} />,
				color: "green",
			}));
			break;
		case "error":
			setVariant(() => ({
				Icon: <WarningIcon {...style} />,
				color: "red",
			}));
			break;
		case "info":
			setVariant(() => ({
				Icon: <InfoOutlineIcon {...style} />,
				color: "blue",
			}));
			break;
		default:
			setVariant(() => ({
				Icon: <CheckIcon {...style} />,
				color: "green",
			}));
			break;
	}
};

export default setColorsByVariant;
