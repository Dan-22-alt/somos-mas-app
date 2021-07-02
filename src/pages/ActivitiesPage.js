import React from "react";
import { Link } from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import { ListOfActivities } from "../backoffice/activities/ListOfActivities";
import AuthChecker from "../features/auth/AuthChecker";

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
