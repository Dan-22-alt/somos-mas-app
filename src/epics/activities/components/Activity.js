import React from "react";
import { Box, Image } from "@chakra-ui/react";
import { ActivityButtons } from "./ActivityButtons";

export const Activity = ({ name, id, image, created_at, deleteItem }) => {
	return (
		<Box
			borderWidth="1px"
			borderRadius="lg"
			minW="300px"
			maxW="450px"
			bg="purple.100"
			pb="10px">
			<Image
				borderRadius="lg"
				src={image}
				alt={name}
				objectFit="cover"
				h="350px"
				p="3px"
			/>
			<Box
				mt="1"
				fontWeight="semibold"
				fontSize="20px"
				as="h4"
				textAlign="center"
				my="8px"
				lineHeight="tight"
				isTruncated>
				{name}
			</Box>
			<Box
				mt="1"
				fontWeight="semibold"
				as="h4"
				textAlign="center"
				my="8px"
				lineHeight="tight"
				isTruncated>
				{created_at.replace(/T.*/, "")}
			</Box>
			<ActivityButtons id={id} deleteItem={deleteItem} />
		</Box>
	);
};
