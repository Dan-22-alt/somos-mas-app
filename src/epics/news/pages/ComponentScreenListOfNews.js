import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Center, Container } from "@chakra-ui/react";
import ComponentNewsBox from "../components/ComponentNewsBox";
import { getNews } from "../../../services/newsService";
import { Card } from "../../../components/Card";

import { useSelector, useDispatch } from "react-redux";
import { obtenerNovedadesAction } from "../../../services/newServices";

// Redux
const ComponentScreenListOfNews = () => {
	const dispatch = useDispatch();
  const [data, setData] = useState([])

	useEffect(() => {
    getNews().then(r => setData(r.data))
	}, []);

	useEffect(() => {
		// Consultar la api
		//const cargarNovedades = () => dispatch(obtenerNovedadesAction());
		//cargarNovedades();

    getNews().then(r => setData(r.data))
		// eslint-disable-next-line
	}, []);

	return (
		<div>
          <Card />
			<Container maxW="container.xl" marginTop="1.5%">
				<Center>
					<Link to="/backoffice/news/create">
						<Button colorScheme="blue">Crear Novedad</Button>
					</Link>
				</Center>
				<Center marginTop="1%">
					<h1>Ultimas novedades</h1>
				</Center>
				<Center d="flex" flexDirection="column" marginTop="2%">
					{data.map(n => (
						<ComponentNewsBox {...n} key={n.id} />
					))}
				</Center>
			</Container>
		</div>
	);
};

export default ComponentScreenListOfNews;


/*
 *
 *
					{dispatch.map(n => (
						<ComponentNewsBox {...n} key={n.id} />
					))}
*/
