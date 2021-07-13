import React, { useState } from "react";
import getBase64 from "../../../../utils/getBase64";
import { Button, Input } from "@chakra-ui/react";

export const SelectSlider = ({ id, control }) => {
	const [fileName, setFileName] = useState();

	const name = "Slider" + id;
	const idSlider = "sliderText" + id;
	const idFile = "sliderFile" + id;
	const file = control.values[idFile];
	return (
		<>
			<Button colorScheme={file ? "red" : "blue"}>
				{fileName ? `${name}: ${fileName}` : name}
				<input
					type="file"
					name={idSlider}
					accept="image/png, image/jpeg"
					onChange={async e => {
						setFileName(e.target.files[0].name);
						const file64 = await getBase64(e.target.files[0]);
						control.setFieldValue(idFile, file64);
					}}
				/>
			</Button>
			<Input
				id={idSlider}
				value={control.values[idSlider]}
				onChange={control.handleChange}
				placeholder="Slider msg"
			/>
		</>
	);
};
