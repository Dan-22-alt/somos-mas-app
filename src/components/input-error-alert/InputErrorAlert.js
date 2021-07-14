import React from "react";
import { Alert, AlertIcon } from "@chakra-ui/react";

const InputErrorAlert = ({ text, ...rest }) => {
	return (
		<Alert status="error" borderRadius="md" {...rest}>
			<AlertIcon />
			{text}
		</Alert>
	);
};

export default InputErrorAlert;
