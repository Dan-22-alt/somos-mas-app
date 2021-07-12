import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NewsForm from "../../../backoffice/news/NewsForm";
import { obtenerNewsID } from "../../../services/newServices";
import { getNewsById} from "../../../services/newsService";
import { useDispatch } from "react-redux";

const EditNewsPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const [novedad, setNovedad] = useState(null);

  //llamar la funcion desde el services(para obtener newsid)
	const seleccionarNewsId = news => dispatch(obtenerNewsID(news));

  useEffect(() => {
    getNewsById(id).then((response) => {
      setNovedad(response.data);
    });
  }, [id]);

  return <NewsForm data={novedad} />;
};

export default EditNewsPage;
