import React from "react";
import { Modal as ModalChakra, ModalOverlay, ModalContent,
  ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button } from "@chakra-ui/react"

export const Modal =
  ({isOpen, onClose, title='I need title', children, buttonText='buttonText', onClick}) => {

  return(
    <ModalChakra isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          {children}
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="red" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button colorScheme='blue' onClick={onClick}>{buttonText}</Button>
        </ModalFooter>
      </ModalContent>
    </ModalChakra>
  )
}
