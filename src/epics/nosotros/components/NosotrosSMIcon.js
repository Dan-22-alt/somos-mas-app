import React from "react";
import { Center, Icon, Link } from "@chakra-ui/react";

const NosotrosSMIcon = ({ url, Icon, iconColor, ...rest }) => {
	return (
		<Link href={url} target="_blank" rel="noopener" {...rest}>
			<Center borderRadius="full" boxShadow="base" w={10} h={10}>
				<Icon as={Icon} w={4} h={4} color={iconColor} />
			</Center>
		</Link>
	);
};

export default NosotrosSMIcon;
