import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";

import {
  SimpleGrid, Center,
  Button, Heading,
  Flex, Text,
  Image, Box
} from "@chakra-ui/react";
import { convertirHtml } from "../../../utils/convertirHtml";
import Spinners from "../../../layout/Spinners";

const ScreenOrganization = () => {
  const ongData = useSelector(state => state.organization.data)

  return (
    <Flex backgroundColor="gray.200" h="100vh" flexDirection="column" alignItems="center" paddingTop="9vh">
      <Text fontWeight="semibold" fontSize="3xl" color="teal" mb={2}>DATOS DE LA ORGANIZACIÓN</Text>
      <Center w="100vh" marginBottom="6vh">
        {ongData?.name
          ? <SimpleGrid>
              <Box alignItems="center" justifyContent="space-around" h="15vh" d="flex">
                <Heading>{ongData?.name}</Heading>
              </Box>
                <Image
                  boxSize="75%"
                  objectFit="contain"
                  src={ongData?.logo}
                  className="margin-auto"
                  alt="logo"
                />
              <SimpleGrid d="flex"  flexDirection="column" >
                <Text d="flex" color="teal" fontSize="2xl">Descripción breve</Text>
                <Text d="flex" dangerouslySetInnerHTML={convertirHtml(ongData?.short_description)}/>
              </SimpleGrid>
            </SimpleGrid>
          : <Spinners />
        }
      </Center>
      <Link to="/backoffice/organization/edit">
        <Button
          w="18vh"
          h="7vh"
          borderRadius="20px"
          type="submit"
          variant="solid"
          colorScheme="teal">
          Editar
        </Button>
      </Link>
    </Flex>
  )
}

export default ScreenOrganization
