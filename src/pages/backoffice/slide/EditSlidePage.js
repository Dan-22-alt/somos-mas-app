import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SlideForm from "../../../backoffice/slide/SlideForm";
import { getSlideById } from "../../../services/slideService";

const EditSlidePage = () => {
  const { id } = useParams();

  const [slide, setSlide] = useState(null);

  useEffect(() => {
    getSlideById(id).then((response) => {
      setSlide(response.data);
    });
  }, [id]);

  return <SlideForm data={slide} />;
};

export default EditSlidePage;
