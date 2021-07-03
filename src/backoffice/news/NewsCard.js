import React, { useState } from "react";
import { Box, Button, Container, useToast } from "@chakra-ui/react";
import Alert from "../../ui/alert/Alert";
import { Link } from "react-router-dom";
import { deleteNews } from "../../../services/newsService";

// id: 56,
// name: "Apoyo escolar para el nivel Primario.",
// slug: null,
// content: "<p>El espacio de apoyo escolar es el corazón del área educativa. Se realizan los talleres de lunes a jueves de 10 a 12 horas y de 14 a 16 horas en el contraturno, Los sábados también se realiza el taller para niños y niñas que asisten a la escuela doble turno.Acompañamiento escolar y familiar (Los tutores son encargados de articular con la familia y con las escuelas de los jóvenes para monitorear el estado de los tutoreados) Beca estímulo (los jóvenes reciben una beca.</p>",
// image: "http://ongapi.alkemy.org/storage/IW4KbvYLre.jpeg",
// user_id: null,
// category_id: 53,
// created_at: "2021-05-20T00:23:10.000000Z",
// updated_at: "2021-06-30T12:45:55.000000Z",
// deleted_at: null,

const NewsCard = ({ id, name, slug, content, image, created_at }) => {
  const [deleteAlertIsOpen, setDeleteAlertIsOpen] = useState(false);
  const toast = useToast();

  const handleDelete = () => {
    setDeleteAlertIsOpen(true);
  };

  const onConfirmDelete = () => {
    deleteNews(id)
      .then(() => {
        toast({
          title: "Novedad eliminada.",
          status: "success",
        });
        window.location.reload();
      })
      .catch((e) => {
        toast({
          title: "Ocurrio un error al eliminar la novedad.",
          status: "error",
        });
      });
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
        onConfirm={onConfirmDelete}
        type="error"
        title="¿Está seguro que desea eliminar esta novedad?"
        confirmButtonText="Eliminar"
      />
    </Box>
  );
};

export default NewsCard;
