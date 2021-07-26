import React from "react";
import { Box, Text, Image as ChakraImage } from "@chakra-ui/react";

const TestimoniesCard = ({ image, name }) => {
	return (
		<Box>
			{image ? (
				<Box
					boxShadow="md"
					d="flex"
					borderRadius="md"
					alignItems="center"
					justifyContent="center"
					flexDirection="column">
					<ChakraImage
						src={image}
						h={56}
						objectFit="cover"
						w="100%"
						borderTopRadius="md"
					/>
					<Box
						h={20}
						d="flex"
						fontSize="semibold"
						alignItems="center"
						justifyContent="center"
						w="100%">
						<Text d="flex" color="primary.200" fontSize="lg">
							{name}
						</Text>
					</Box>
				</Box>
			) : (
				<Box
					display="flex"
					alignItems="center"
					justifyContent="center"
					h={30}
					boxShadow="xs"
					bg="gray.200">
					<Text>La imagen no cargo</Text>
				</Box>
			)}
		</Box>
	);
};

export default TestimoniesCard;
