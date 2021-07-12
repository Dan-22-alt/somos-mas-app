import React from "react";
import "../components/form-members/stylesMembers.css";
import FormMembersEdit from "../components/form-members/FormMembers";

const MembersCreate = () => {
	const data = {
		name: "",
		description: "",
		image: "",
		facebookUrl: "",
		linkedinUrl: "",
	};
	return <FormMembersEdit data={data} mode={"create"}></FormMembersEdit>;
};
export default MembersCreate;
