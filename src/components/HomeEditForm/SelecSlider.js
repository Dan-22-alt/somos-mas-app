import React, { useState } from "react";
import { Button, Input } from "@chakra-ui/react"

export const SelectSlider = ({name='defaultName'}) => {
  const [file, setFile] = useState(null)
  const [value, setValue] = useState()

  return(
    <>
      <Button
        colorScheme={file ? 'red': 'blue'}
      >
        {file ? `${name}: ${file.name}` : name}
        <input
          type="file"
          id={name}
          name={name}
          accept="image/png, image/jpeg"
          onChange={e => setFile(e.target.files[0])}
        />
      </Button>
      <Input
        value={value}
        onChange={ e => setValue(e.target.value)}
        placeholder="xxxxxxxxx"
      />
    </>
  )
}
