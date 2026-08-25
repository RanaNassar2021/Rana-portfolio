import React from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import Swal from "sweetalert2";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";

const RECIPIENT_EMAIL = "Rana.nassar9925@gmail.com";

const LandingSection = () => {
  const {
    values,
    handleChange,
    handleSubmit,
    errors,
    touched,
    validateForm,
    setTouched,
    resetForm,
  } = useFormik({
   initialValues: {
    firstName: '',
    type: 'hireMe',
    comment: ''
   },
   onSubmit: (formValues) => {
    const subject = encodeURIComponent(`Portfolio enquiry from ${formValues.firstName}`);
    const body = encodeURIComponent(
      `Name: ${formValues.firstName}\nType of enquiry: ${formValues.type}\n\nMessage:\n${formValues.comment}`
    );
    window.location.href = `mailto:${RECIPIENT_EMAIL}?subject=${subject}&body=${body}`;
    Swal.fire({
      icon: 'success',
      title: 'All good..',
      text: 'Thanks for your submission, i will contact you shortly :)',
    });
    resetForm();
   },
    validationSchema: Yup.object().shape({
      firstName: Yup.string().required('Name is required'),
      type: Yup.string().required('Please select a type of enquiry'),
      comment: Yup.string().required('required'),
    }),

  });

  const handleSubmitClick = async () => {
    const validationErrors = await validateForm();
    setTouched({ firstName: true, type: true, comment: true }, true);
    if (Object.keys(validationErrors).length > 0) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!, please fill all the required fields',
      });
      return;
    }
    handleSubmit();
  };

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#2A4365"
      spacing={4}

    >
      <VStack p={1} alignItems="flex-start" id="form">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={1} rounded="md" w="100%">
          <form onSubmit={handleSubmit} >
            <VStack spacing={4}> 
              <FormControl isRequired>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input value={values.firstName} onChange={handleChange}
                  className={errors.firstName && touched.firstName?"input-error":""}
                  id="firstName"
                  name="firstName"
                />
                {errors.firstName && touched.firstName && <p className="error">{errors.firstName}</p>}
                <FormErrorMessage></FormErrorMessage>
              </FormControl>

              <FormControl isRequired>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select id="type" name="type" value={values.type} onChange={handleChange}
                  className={errors.type && touched.type?"input-error":""}
                >
                  <option value="hireMe" className="text-dark">Freelance project proposal</option>
                  <option value="openSource" className="text-dark">
                    Open source consultancy session
                  </option>
                    <option value="fullTime" className="text-dark">
                    Full Time / Part Time Position
                  </option>
                  <option value="other" className="text-dark">Other</option>
                </Select>
                {errors.type && touched.type && <p className="error">{errors.type}</p>}
              </FormControl>
              <FormControl isRequired>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea value={values.comment} onChange={handleChange}
                className={errors.comment && touched.comment ?"input-error":""}
                  id="comment"
                  name="comment"
                  height={250}
                />
                {errors.comment && touched.comment && <p className="error">{errors.comment}</p>}
                <FormErrorMessage></FormErrorMessage>
              </FormControl>
              <Button type="button"  width="full" style={{ backgroundColor: "#0d6efd", color: "white" }}
               onClick={handleSubmitClick}>
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
