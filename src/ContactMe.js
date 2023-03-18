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

const LandingSection = () => {
  const {values, handleChange, handleSubmit, errors, touched} = useFormik({
   initialValues: {
    firstName: '',
    email: '',
    comment: ''
   },
   onSubmit: (values) => {
   console.log(values)
   },
    validationSchema: Yup.object().shape({
      firstName: Yup.string().required('Name is required'),
      email: Yup.string().email('Please enter a valid email').required("Email required"),
      comment: Yup.string().required('required'),
    }),
   //onSubmit,

  });

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      spacing={4}

    >
      <VStack p={1} alignItems="flex-start" id="form">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={1} rounded="md" w="100%">
          <form onSubmit={handleSubmit} >
            <VStack spacing={4}> 
              <FormControl >
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input value={values.firstName} onChange={handleChange}
                  className={errors.firstName && touched.firstName?"input-error":""}
                  id="firstName"
                  name="firstName"
                />
                {errors.firstName && touched.firstName && <p className="error">{errors.firstName}</p>}
                <FormErrorMessage></FormErrorMessage>
              </FormControl>
              <FormControl >
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input value={values.email} onChange={handleChange}
                  className={errors.email && touched.email ?"input-error":""}
                  id="email"
                  name="email"
                  type="email"
                />
                {errors.email&& touched.email && <p className="error">{errors.email}</p>}
                <FormErrorMessage></FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select id="type" name="type">
                  <option value="hireMe" className="text-dark">Freelance project proposal</option>
                  <option value="openSource" className="text-dark">
                    Open source consultancy session
                  </option>
                  <option value="other" className="text-dark">Other</option>
                </Select>
              </FormControl>
              <FormControl >
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
              <Button type="submit" colorScheme="purple" width="full"
               onClick={()=>{
                if (errors.firstName==null && errors.comment==null&& errors.email==null){
                  Swal.fire({
                    icon: 'success',
                    title: 'All good..',
                    text: 'Thanks for your submission, i will contact you shortly :)',
                })
                } else{
                  Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!, please fill all the required fields',

                })
                }
              }}>
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
