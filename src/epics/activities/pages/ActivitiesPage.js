import React from "react";
import { Link } from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";

import AuthChecker from "../../../features/auth/AuthChecker";
import { ListOfActivities } from "../components/ListOfActivities";

const LinkNew = () => (
	<Link
		mt="20px"
		display="flex"
		justifyContent="center"
		as={ReactLink}
		color="teal.500"
		to="/backoffice/activities/create">
		Create New Activity
	</Link>
);

export const ActivitiesPage = () => {
	return (
		<>
			<AuthChecker>
				<LinkNew />
				<ListOfActivities />
			</AuthChecker>
		</>
	);
};
