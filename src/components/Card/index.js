import React from "react";
import { Box } from "@chakra-ui/react";
import { SmartPicture } from "./SmartPicture";
import { ButtonsCard } from "./ButtonsCard";

export const Card = ({name, id, image, description, handleEdit, handleDelete}) => {
  return(
		<Box
			borderWidth="1px"
			borderRadius="lg"
      w={[350]}
			bg="purple.200"
			pb="10px"
    >
      <SmartPicture src={image} />
			<Box>
        <Box
          mt="1"
          fontWeight="semibold"
          fontSize="20px"
          as="h4"
          textAlign="center"
          my="8px"
          lineHeight="tight"
          isTruncated
        >
          {name}
        </Box>
        <Box
          mt="1"
          fontSize="16px"
          as="p"
          textAlign="center"
          my="8px"
          lineHeight="tight"
          isTruncated>
          {description}
        </Box>
        { handleDelete && handleEdit
          ? <ButtonsCard
              id={id}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          : null
        }
			</Box>
		</Box>
  )
}
