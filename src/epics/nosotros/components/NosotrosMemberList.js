import { SimpleGrid, Container } from "@chakra-ui/react";
import React from "react";
import NosotrosMemberCard from "./NosotrosMemberCard";

const NosotrosMemberList = ({members}) => {
	return (
		<div>
			<Container maxW="container.xl">
				<SimpleGrid columns={{ lg: 4, md: 3, sm: 2 }} spacing={7} my={10}>
					{members.map(card => (
						<NosotrosMemberCard key={card.id} {...card} />
					))}
				</SimpleGrid>
			</Container>
		</div>
	);
};

export default NosotrosMemberList;
