import React from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

const ActivitySearchBar = ({ items }) => {
	// items must be an array of objects, and have a "name" key
	const handleOnSelect = item => {
		console.log("handle on select", item.id);
	};

	const formatResult = item => {
		return item;
	};

	return (
		<>
			<ReactSearchAutocomplete
				items={items}
				onSelect={handleOnSelect}
				autoFocus
				formatResult={formatResult}
				styling={{
					borderRadius: "5px",
					boxShadow: "rgba(32, 33, 36, 0.28) 0px 1px 1px 0px",
				}}
			/>
		</>
	);
};

export default ActivitySearchBar;
