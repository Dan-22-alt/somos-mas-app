import React from "react";
import { Box } from "@chakra-ui/react";
import { SmartPicture } from "./SmartPicture";
import { ButtonsCard } from "./ButtonsCard";

const nameE = 'Title'
const ref = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FwAY8mTWlna0%2Fhqdefault.jpg&f=1&nofb=1'
//const ref = undefined
const descE = 'esto es una descripcion'
const idE = ''

export const Card = ({name=nameE, id=idE, image=ref, desc=descE}) => {
  const deleteItem = id =>console.log('borrar id', id)
  return(
		<Box
			borderWidth="1px"
			borderRadius="lg"
			minW="300px"
			maxW="450px"
			bg="purple.200"
			pb="10px">
      <SmartPicture src={image} />
			<Box
				mt="1"
				fontWeight="semibold"
				fontSize="20px"
				as="h4"
				textAlign="center"
				my="8px"
				lineHeight="tight"
				>
				{name}
			</Box>
			<Box
				mt="1"
				fontWeight="semibold"
				fontSize="20px"
				as="h4"
				textAlign="center"
				my="8px"
				lineHeight="tight"
				isTruncated>
				{desc}
			</Box>
      <ButtonsCard id={id} deleteItem={deleteItem}/>
		</Box>
  )
}
