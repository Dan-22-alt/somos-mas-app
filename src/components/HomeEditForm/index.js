import React, { useEffect } from "react";
import { useDisclosure, Button } from "@chakra-ui/react"
import { useFormik } from "formik"

import { FormBox } from '../FormBox/FormBox'
import { Modal } from '../Modal/Modal'
import { editSlide } from '../../services/slidesService'

import { SelectSlider } from "./SelecSlider"
import { FormTextArea } from "./FormTextArea"
import { FetchSlicer } from "./FetchSlicer"
import { initialValues, validationSchema, onSubmit } from "./useCtrlFormik"
import './style.css'

export const HomeEditForm = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const slicers = FetchSlicer()
  const [data, apiEdit] = editSlide()
  const formik = useFormik({initialValues, validationSchema, onSubmit: onSubmit(slicers, apiEdit)})

  useEffect(() => {
    const valuesNames = Object.keys(initialValues)
    slicers.forEach((slicer, index ) =>
      formik.setFieldValue(valuesNames[index + 1], slicer.description)
    )
    // eslint-disable-next-line
  }, [slicers])

  useEffect(() => {
    console.log(data)
  }, [data])

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
          {[1, 2, 3].map(slider =>
            <SelectSlider id={slider} key={slider + 'slider'} control={formik} />
          )}
        </FormBox>
      </Modal>
    </>
  )
}
