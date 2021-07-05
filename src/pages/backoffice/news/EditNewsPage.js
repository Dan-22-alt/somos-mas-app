import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NewsForm from "../../../backoffice/news/NewsForm";
import { getNewsById } from "../../../services/newsService";

const EditNewsPage = () => {
  const { id } = useParams();

  const [novedad, setNovedad] = useState(null);

  useEffect(() => {
    getNewsById(id).then((response) => {
      setNovedad(response.data);
    });
  }, [id]);

  console.log("asdasd", novedad);
  return <NewsForm data={novedad} />;
};

export default EditNewsPage;
