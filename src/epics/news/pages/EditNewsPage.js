import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
//import { obtenerNewsID } from "../../../services/newServices";
// import { useDispatch } from "react-redux";
import { getNewsById } from '../../../services/newsService';
import NewsForm from '../components/NewsForm';

const EditNewsPage = () => {
  //  llamar la funcion desde el services(para obtener newsid)
  //	const seleccionarNewsId = news => dispatch(obtenerNewsID(news));
  //  const dispatch = useDispatch();
  const { id } = useParams();

  const [novedad, setNovedad] = useState(null);

  useEffect(() => {
    getNewsById(id).then((response) => {
      setNovedad(response.data);
    });
  }, [id]);

  return <NewsForm data={novedad} />;
};

export default EditNewsPage;
