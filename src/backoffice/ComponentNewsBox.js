import React, { useState } from "react";

import { Box, Button, Container } from "@chakra-ui/react";
import { Alert } from "../components";
import AuthChecker from "../features/auth/AuthChecker";
import { Link } from "react-router-dom";

const ComponentNewsBox = ({ id, name, slug, content, image, created_at }) => {
  const [deleteAlertIsOpen, setDeleteAlertIsOpen] = useState(false);

  const handleDelete = () => {
    setDeleteAlertIsOpen(true);
  };

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      borderColor="blue.300"
      overflow="hidden"
      bg="white"
      h="26vh"
      d="flex"
      flexDirection="row"
      marginBottom="2.5%"
    >
      <Box h="100%" w="26%" d="flex" alignItems="center" borderWidth="1px">
        <img src={image} alt={name} />
      </Box>
      <Container>
        <Box
          d="flex"
          flexDirection="column"
          w="78%"
          h="100%"
          justifyContent="space-around"
        >
          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {name}
          </Box>
          <Box as="span" color="gray.600" fontSize="sm">
            Fecha de creacion: {created_at}
          </Box>
          <Box>
            <Box d="flex" justifyContent="space-between" w="50%">
              <Link to={`/backoffice/news/${id}/edit`}>
                <Button colorScheme="blue">Editar</Button>
              </Link>

              <Button onClick={handleDelete} colorScheme="red">
                Eliminar
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
      <Alert
        isOpen={deleteAlertIsOpen}
        setIsOpen={setDeleteAlertIsOpen}
        type="error"
        title="¿Está seguro que desea eliminar esta novedad?"
        confirmButtonText="Eliminar"
      />
    </Box>
  );
};

export default ComponentNewsBox;
