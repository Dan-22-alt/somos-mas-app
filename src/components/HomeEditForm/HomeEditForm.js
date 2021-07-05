import React from "react";
import { useDisclosure, Button } from "@chakra-ui/react"
import { useFormik } from "formik"

import { FormBox } from '../FormBox/FormBox'
import { Modal } from '../Modal/Modal'

import { SelectSlider } from "./SelecSlider"
import { FormTextArea } from "./FormTextArea"
import { initialValues, validationSchema, onSubmit } from "./useCtrlFormik"
import './style.css'

export const HomeEditForm = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const formik = useFormik({initialValues, validationSchema, onSubmit})
  return(
    <>
      <Button onClick={onOpen}>hola</Button >
      <Modal
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        title='Home Edit Form'
        buttonText='Edit'
        onClick={formik.handleSubmit}
      >
        <FormBox>
          <FormTextArea
            id='welcomeGreeting'
            control={formik}
          />
          { [1, 2, 3].map(slider =>
            <SelectSlider
              name={'Slider ' + slider}
              key={'Slider ' + slider}
              id={slider}
              control={formik}
            />
          )}
        </FormBox>
      </Modal>
    </>
  )
}
