import { useEffect } from "react";
import { useToast } from "@chakra-ui/react";

import { editTestimonials, createTestimonials } from "../../../services/testimonialsService";
export const AlertTestimonials = () => {
  const [dataEdit, fetchEdit] = editTestimonials()
  const [dataCreate, fetchCreate] = createTestimonials()

	const toast = useToast();
  useEffect(()=> {
    if(dataEdit.error){
      alert("Debes proporcionar una imagen");
    }
    if(dataEdit.res){
      toast({
      	title: "Testimonio editado",
      	status: "success",
      	duration: 2000,
      	isClosable: true,
      });
    }
    if (dataCreate.error) {
    	alert("Debes proporcionar una imagen");
    }
    if(dataCreate.res){
    	toast({
    		title: "Testimonio creado",
    		status: "success",
    		duration: 2000,
    		isClosable: true,
    	});
    }
  }, [dataEdit.error, dataEdit.res, dataCreate.error, dataCreate.res])

  return {fetchEdit, fetchCreate}
}
