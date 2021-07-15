import React from "react";
import { Text } from "@chakra-ui/react";

const Description = ({ text, ...rest }) => {
	return <Text {...rest}>{text}</Text>;
};

export default Description;
