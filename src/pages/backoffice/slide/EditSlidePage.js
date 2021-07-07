import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SlideForm from "../../../backoffice/slide/SlideForm";
import { getSlideById } from "../../../services/slidesService";

const EditSlidePage = () => {
  const { id } = useParams();
  const { res, error } = getSlideById(id)
  const [slide, setSlide] = useState(null);

  useEffect(() => {
    if(res?.data) setSlide(res?.data)
    if(error) console.log(error)
  }, [res, error]);

  return <SlideForm data={slide} />;
};

export default EditSlidePage;
