import React from "react";
import { Text } from "@chakra-ui/react";

const Description = ({ text, ...rest }) => {

	function createText() {
		return {__html: text};
	  }

	return <Text {...rest} dangerouslySetInnerHTML={createText()}/>;
};

export default Description;
