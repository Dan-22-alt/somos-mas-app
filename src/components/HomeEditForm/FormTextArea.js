import React, { useState } from "react";
import { Textarea, Text } from "@chakra-ui/react"

export const FormTextArea = () => {
  let [value, setValue] = useState("")
  let handleInputChange = e => setValue(e.target.value)

  return (
    <>
      <Text mb="8px">Welcome message</Text>
      <Textarea
        value={value}
        onChange={handleInputChange}
        placeholder="Here is a sample placeholder"
        size="sm"
      />
    </>
  )
}
