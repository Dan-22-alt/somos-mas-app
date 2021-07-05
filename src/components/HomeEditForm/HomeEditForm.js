import React from "react";
import { FormBox } from '../FormBox/FormBox'
import { Modal } from '../Modal/Modal'
import { useDisclosure, Button } from "@chakra-ui/react"
import { SelectSlider } from "./SelecSlider"
import { FormTextArea } from "./FormTextArea"
import './style.css'

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
          <SelectSlider name='Slider 1' />
          <SelectSlider name='Slider 2' />
          <SelectSlider name='Slider 3' />
        </FormBox>
      </Modal>
    </>
  )
}
