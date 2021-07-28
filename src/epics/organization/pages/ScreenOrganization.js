import { Box, Button, Center, Flex, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Spinners from '../../../layout/Spinners';
import { convertirHtml } from '../../../utils/convertirHtml';

const ScreenOrganization = () => {
  const ongData = useSelector((state) => state.organization.data);

  return (
    <Flex flexDirection="column" alignItems="center">
      <Text fontWeight="semibold" fontSize="3xl" color="teal" mb={2}>
        DATOS DE LA ORGANIZACIÓN
      </Text>
      <Center>
        {ongData?.name ? (
          <SimpleGrid>
            <Box alignItems="center" justifyContent="space-around" d="flex">
              <Heading>{ongData?.name}</Heading>
            </Box>
            <Image width="300px" my="2rem" mx="auto" objectFit="contain" src={ongData?.logo} alt="logo" />
            <SimpleGrid d="flex" flexDirection="column">
              <Text d="flex" color="teal" fontSize="2xl">
                Descripción breve
              </Text>
              <Text
                d="flex"
                maxW="container.sm"
                my="2rem"
                dangerouslySetInnerHTML={convertirHtml(ongData?.short_description)}
              />
            </SimpleGrid>
          </SimpleGrid>
        ) : (
          <Spinners />
        )}
      </Center>
      <Link to="/backoffice/organization/edit">
        <Button w="18vh" h="7vh" borderRadius="20px" type="submit" variant="solid" colorScheme="teal">
          Editar
        </Button>
      </Link>
    </Flex>
  );
};

export default ScreenOrganization;
