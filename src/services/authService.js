import axios from "axios";

export const login = values => {
	axios
		.post(`${process.env.REACT_APP_API_LOGIN}`, values)
		.then(res => {
			console.log(res);
			const token = res.data.token;
			localStorage.setItem("token", token);
			return true;
		})
		.catch(err => {
			console.log(err);
			return true;
		});
};

export const handleRequest = async ({
	method = "get",
	body = null,
	endpoint,
}) => {
	try {
		const response = await axios[method](endpoint, body);
		return response;
	} catch (error) {
		return error;
	}
};

export const register = async body => {
	const response = await axios.post(
		process.env.REACT_APP_API_REGISTER,
		body
	);
	return response;
};
