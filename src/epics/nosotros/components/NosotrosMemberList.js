import { SimpleGrid, Container } from "@chakra-ui/react";
import React from "react";
import { nosotrosMockData } from "../mock-data/mockData";
import NosotrosMemberCard from "./NosotrosMemberCard";

const NosotrosMemberList = () => {
	return (
		<div>
			<Container maxW="container.xl">
				<SimpleGrid columns={{ lg: 4, md: 3, sm: 2 }} spacing={7} my={10}>
					{nosotrosMockData.map(card => (
						<NosotrosMemberCard {...card} />
					))}
				</SimpleGrid>
			</Container>
		</div>
	);
};

export default NosotrosMemberList;
