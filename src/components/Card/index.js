import React from "react";
import { Box } from "@chakra-ui/react";
import { SmartPicture } from "./SmartPicture";
import { ButtonsCard } from "./ButtonsCard";

export const Card = ({name, id, image, description, handleEdit, handleDelete, children, activity, handleViews}) => {
  return(
    <Box
      borderWidth="1px"
      borderRadius="lg"
      w={[350]}
      pb="10px"
      boxShadow="lg"
      p='1rem'
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
        {description &&
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
        }
        {children}
        {handleDelete && handleEdit
          ? <ButtonsCard
            id={id}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
          : null
        }
        {activity &&
          <Button
            borderRadius={0}
            type="submit"
            variant="solid"
            colorScheme="teal"
            width="full"
            onClick={() => handleViews(activity)}
          >
            Detalles
          </Button>}
      </Box>
    </Box>
  )
}
