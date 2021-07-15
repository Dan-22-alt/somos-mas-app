import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button, Center, Container, SimpleGrid, useToast } from "@chakra-ui/react";
import { getNews, deleteNews } from "../../../services/newsService";
import { Card } from "../../../components/Card";

const ComponentScreenListOfNews = () => {
  const history = useHistory()
  const [data, setData] = useState([])
  const toast = useToast()

	const handleEdit = id => {
		history.push(`/backoffice/news/${id}/edit`);
	};


	useEffect(() => {
    getNews().then(r => setData(r.data))
	}, []);

	const handleDelete = id => {
		deleteNews(id)
			.then(r => {
        console.log(r)
				toast({
					title: "Novedad eliminada.",
					status: "success",
				});
				window.location.reload();
			})
			.catch(e => {
				toast({
					title: "Ocurrio un error al eliminar la novedad.",
					status: "error",
				});
			});
	};

	return (
    <Container maxW="container.xxl" marginTop="1.5%">
      <Center>
        <Link to="/backoffice/news/create">
          <Button colorScheme="blue">Crear Novedad</Button>
        </Link>
      </Center>
      <Center marginTop="1%">
        <h1>Ultimas novedades</h1>
      </Center>
      <SimpleGrid
        my="auto"
        minChildWidth="300px"
        mt="150px"
        justifyItems="center"
        spacing="40px"
        mx={[0, 5, 10, 30]}
      >
        {data.map(n =>
          <Card
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            {...n}
            key={n.id}
            description={n.content}
          />
        )}
      </SimpleGrid>
    </Container>
	);
};

export default ComponentScreenListOfNews;
