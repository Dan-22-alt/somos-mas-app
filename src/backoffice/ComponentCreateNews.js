import React from "react";
import AuthChecker from "../features/auth/AuthChecker";
import NewsForm from "./news/NewsForm";

const ComponentCreateNews = () => {
	return (
		<AuthChecker>
			<NewsForm />
		</AuthChecker>
	);
};

export default ComponentCreateNews;
