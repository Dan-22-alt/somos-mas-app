import React, { useRef, useState, useEffect } from "react";
import {
  Input, Button,
  Stack, Box,
  FormControl, FormLabel,
  Image,
} from "@chakra-ui/react"; // form imports
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { Spinner } from "../../../../layout/Spinners";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import getBase64 from "../../../../utils/getBase64";
import InputErrorAlert from "../../../../components/input-error-alert/InputErrorAlert";
import { BsUpload } from "react-icons/bs"; // logo upload icon
//import { editOng } from "../../../../services/organizationService";
import { UseFormik } from './logic'
import { useSelector } from 'react-redux'

const EditOrgForm = () => {
  const logoRef = useRef()
  const formik = UseFormik()
  const [previewImage, setPreviewImage] = useState(null);

  const ongStatus = useSelector(state => state.organization.status)
  useEffect(() => {
    if (formik.values.logo) {
      setPreviewImage(formik.values.logo);
    }
  }, [formik.values.logo]);

  const handleImage = async e => {
    const image = e.target.files[0];
    try {
      const logo64 = await getBase64(image)
      formik.setFieldValue("logo", logo64)
    }
    catch (error) { console.log("Error", error) }
  }

  return (
    <Stack
      flexDir="column"
      mb="2"
      justifyContent="center"
      alignItems="center">
      <Box width="100%" maxWidth="100%">
        <Box
          boxShadow="md"
          borderRadius="md"
          as="form"
          onSubmit={formik.handleSubmit}>
          <Stack spacing={4} p="1rem" boxShadow="md">
            <FormControl>
              {formik.touched.name && formik.errors.name ? (
                <InputErrorAlert text={formik.errors.name} />
              ) : null}
              {/* name */}
              <FormLabel>Nombre</FormLabel>
              <Input
                type="text"
                placeholder="Miguel"
                id="name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </FormControl>
            {/* short description */}
            <FormControl>
              {formik.touched.short_description &&
              formik.errors.short_description ? (
                <InputErrorAlert text={formik.errors.short_description} />
              ) : null}
              <FormLabel>Descripción corta</FormLabel>
              <CKEditor
                editor={ClassicEditor}
                data={formik.values.short_description}
                id="short_description"
                name="short_description"
                onChange={(event, editor) => {
                  const text = editor.getData();
                  formik.setFieldValue('short_description', text)
                }}
              />
            </FormControl>
            {/* long description */}
            <FormControl>
              {formik.touched.long_description &&
              formik.errors.long_description ? (
                <InputErrorAlert text={formik.errors.long_description} />
              ) : null}
              <FormLabel>Descripción larga</FormLabel>
              <CKEditor
                isFullWidth
                editor={ClassicEditor}
                data={formik.values.long_description}
                id="long_description"
                name="long_description"
                onChange={(event, editor) => {
                  const text = editor.getData();
                  formik.setFieldValue('long_description', text)
                }}
              />
            </FormControl>
            {/* logo */}
            <FormControl>
              {formik.touched.logo && formik.errors.logo ? (
                <InputErrorAlert text={formik.errors.logo} />
              ) : null}
              <FormLabel>Logo</FormLabel>
              <Stack
                direction={["column", "row"]}
                align={{ base: "start", sm: "center" }}
              >
                <Input
                  ref={logoRef}
                  display="none"
                  type="file"
                  id="logo"
                  name="logo"
                  accept="image/png, image/jpeg"
                  onChange={handleImage}
                />
                <Stack style={{ margin: 0 }} direction="row" spacing={4}>
                  <Button
                    size="sm"
                    leftIcon={<BsUpload />}
                    colorScheme="teal"
                    onClick={() => {
                      logoRef.current.click();
                    }}
                    variant="outline">
                    Upload
                  </Button>
                </Stack>
                  <Box
                    boxSize=""
                    className="margin-auto"
                    justifyContent="center"
                  >
                    <Image
                      boxSize="40%"
                      objectFit="contain"
                      src={previewImage ? previewImage : ''}
                      className="margin-auto"
                      alt="logo"
                    />
                  </Box>
              </Stack>
            </FormControl>
            {/* facebook link */}
            <FormControl>
              {formik.touched.facebookLink &&
              formik.errors.facebookLink ? (
                <InputErrorAlert text={formik.errors.facebookLink} />
              ) : null}

              <FormLabel>Facebook link</FormLabel>
              <Input
                type="text"
                placeholder="https://www.facebook.com/user/"
                id="facebookLink"
                name="facebookLink"
                value={formik.values.facebookLink}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </FormControl>
            {/* instagram link */}
            <FormControl>
              {formik.touched.instagramLink &&
              formik.errors.instagramLink ? (
                <InputErrorAlert text={formik.errors.instagramLink} />
              ) : null}

              <FormLabel>Instagram link</FormLabel>
              <Input
                type="text"
                placeholder="https://www.instagram.com/user/"
                id="instagramLink"
                name="instagramLink"
                value={formik.values.instagramLink}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </FormControl>
            {/* submit button */}
            <Box>
              { ongStatus === 'edit_loading'
                ? <Spinner />
                : <Button
                    type="submit"
                    variant="solid"
                    colorScheme="teal"
                    mt={6}
                    isFullWidth>
                    Editar
                  </Button>
              }
            </Box>
          </Stack>
        </Box>
      </Box>
    </Stack>
  );
};

export default EditOrgForm;
