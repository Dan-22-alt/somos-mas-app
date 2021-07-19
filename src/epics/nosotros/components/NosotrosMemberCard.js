import React from "react";
import {
	Heading,
	Avatar,
	Box,
	Text,
	Divider,
	HStack,
} from "@chakra-ui/react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import NosotrosSMIcon from "./NosotrosSMIcon";
const NosotrosMemberCard = ({
	name,
	image,
	description,
	facebookUrl,
	linkedinUrl,
}) => {
	return (
		<Box
			w="full"
			bg="white"
			boxShadow="lg"
			borderRadius="md"
			textAlign="center">
			<Box position="relative">
				<Box
					bg="primary.400"
					w="full"
					height={24}
					mb={12}
					borderTopRadius="md"
				/>
				<Avatar
					size="xl"
					src={image}
					alt="Avatar image"
					name={name}
					position="absolute"
					bottom="-50%"
					left={0}
					right={0}
					mx="auto"
					showBorder
				/>
			</Box>
			<Box p={6}>
				<Heading fontSize="2xl" mb={3} color="primary.400">
					{name}
				</Heading>
				<Text fontWeight={600} color={"gray.500"}>
					{description}
				</Text>
				<Divider my={5} />
				<HStack spacing={6} justify="center">
					<NosotrosSMIcon
						url={facebookUrl}
						iconColor="#3b5998"
						Icon={FaFacebookF}
					/>
					<NosotrosSMIcon
						url={linkedinUrl}
						iconColor="#0e76a8"
						Icon={FaLinkedinIn}
					/>
				</HStack>
			</Box>
		</Box>
	);
};

export default NosotrosMemberCard;
