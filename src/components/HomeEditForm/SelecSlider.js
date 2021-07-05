import React from "react";
import { Button, Input } from "@chakra-ui/react"

export const SelectSlider = ({id, control}) => {
  const name = 'Slider' + id
  const idSlider = 'sliderText' + id
  const idFile = 'sliderFile' + id
  const file = control.values[idFile]
  return(
    <>
      <Button
        colorScheme={file ? 'red': 'blue'}
      >
        {file ? `${name}: ${file.name}` : name}
        <input
          type="file"
          name={idSlider}
          accept="image/png, image/jpeg"
          onChange={e => control.setFieldValue(idFile , e.target.files[0])}
        />
      </Button>
      <Input
        id={idSlider}
        value={control.values[idSlider]}
        onChange={control.handleChange}
        placeholder="Slider msg"
      />
    </>
  )
}
