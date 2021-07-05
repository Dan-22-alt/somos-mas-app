import React from "react";
import { Heading } from '@chakra-ui/react';
import { Textarea, Text } from "@chakra-ui/react"
import { FormBox } from '../FormBox/FormBox'
import { Modal } from '../Modal/Modal'

import { useDisclosure, Button, Input } from "@chakra-ui/react"

import './style.css'
export const SelectSlider = ({name='defaultName'}) => {
  const [example, setExample] = React.useState()
  console.log(example)
  return(
    <>
      <Button>{name}
        <input
          type="file"
          id={name}
          name={name}
          accept="image/png, image/jpeg"
          onChange={e => setExample(e.target.files[0])}
        />
      </Button>
      <Input placeholder="Basic usage" />
    </>
  )
}


export const FormTextArea = () => {
  let [value, setValue] = React.useState("")

  let handleInputChange = (e) => {
    let inputValue = e.target.value
    setValue(inputValue)
  }
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

export const HomeEditForm = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()
  return(
    <>
      <Button onClick={onOpen}>hola</Button >
      <Modal
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        title='Home Edit Form'
        buttonText='Edit'
        onClick={() => console.log('hola')}
      >
        <FormBox>
          <FormTextArea />
          <SelectSlider name='Slider 1'  />
          <SelectSlider name='Slider 2' />
          <SelectSlider name='Slider 3' />
        </FormBox>
      </Modal>
    </>
  )
}
