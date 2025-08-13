import React, { useEffect } from "react";
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
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import * as Yup from "yup";
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const MotionBox = motion(Box);
const MotionVStack = motion(VStack);

const ContactMeSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  // Responsive values
  const containerWidth = useBreakpointValue({
    base: "90%",
    sm: "85%",
    md: "80%",
    lg: "1024px"
  });
  const containerPadding = useBreakpointValue({
    base: 4,
    sm: 6,
    md: 8,
    lg: 32
  });

  useEffect(() => {
    if (response) {
      onOpen(response.type, response.message);
      formik.resetForm();
    }
  }, [response, onOpen]);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "hireMe",
      comment: "",
    },

    onSubmit: async (values) => {
      await submit(values);
    },

    validationSchema: Yup.object({
      firstName: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      type: Yup.string().required(),
      comment: Yup.string().min(25, "Must be at least 25 characters").required("Message is required"),
    }),
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    },
    tap: {
      scale: 0.98,
      transition: { duration: 0.1 }
    }
  };

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <MotionVStack
        w={containerWidth}
        p={containerPadding}
        alignItems="flex-start"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={itemVariants}>
          <Heading
            as="h1"
            id="contactme-section"
            fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
            textAlign={{ base: "center", md: "left" }}
            w="100%"
          >
            Contact me
          </Heading>
        </motion.div>

        <MotionBox
          p={{ base: 4, md: 6 }}
          rounded="md"
          w="100%"
          variants={itemVariants}
          whileHover={{ y: -2 }}
          transition={{ duration: 0.2 }}
        >
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={{ base: 3, md: 4 }}>
              <motion.div style={{ width: "100%" }} variants={itemVariants}>
                <FormControl isInvalid={formik.touched.firstName && formik.errors.firstName}>
                  <FormLabel htmlFor="firstName" fontSize={{ base: "sm", md: "md" }}>
                    Name
                  </FormLabel>
                  <Input
                    id="firstName"
                    name="firstName"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}
                    bg="whiteAlpha.100"
                    border="1px solid"
                    borderColor="whiteAlpha.300"
                    _hover={{ borderColor: "whiteAlpha.500" }}
                    _focus={{ borderColor: "purple.300", boxShadow: "0 0 0 1px #D8B4FE" }}
                    fontSize={{ base: "sm", md: "md" }}
                  />
                  <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
                </FormControl>
              </motion.div>

              <motion.div style={{ width: "100%" }} variants={itemVariants}>
                <FormControl isInvalid={formik.touched.email && formik.errors.email}>
                  <FormLabel htmlFor="email" fontSize={{ base: "sm", md: "md" }}>
                    Email Address
                  </FormLabel>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    bg="whiteAlpha.100"
                    border="1px solid"
                    borderColor="whiteAlpha.300"
                    _hover={{ borderColor: "whiteAlpha.500" }}
                    _focus={{ borderColor: "purple.300", boxShadow: "0 0 0 1px #D8B4FE" }}
                    fontSize={{ base: "sm", md: "md" }}
                  />
                  <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                </FormControl>
              </motion.div>

              <motion.div style={{ width: "100%" }} variants={itemVariants}>
                <FormControl>
                  <FormLabel htmlFor="type" fontSize={{ base: "sm", md: "md" }}>
                    Type of enquiry
                  </FormLabel>
                  <Select
                    id="type"
                    name="type"
                    onChange={formik.handleChange}
                    value={formik.values.type}
                    bg="whiteAlpha.100"
                    border="1px solid"
                    borderColor="whiteAlpha.300"
                    _hover={{ borderColor: "whiteAlpha.500" }}
                    _focus={{ borderColor: "purple.300", boxShadow: "0 0 0 1px #D8B4FE" }}
                    fontSize={{ base: "sm", md: "md" }}
                  >
                    <option value="hireMe">Freelance project proposal</option>
                    <option value="openSource">Open source consultancy session</option>
                    <option value="other">Other</option>
                  </Select>
                </FormControl>
              </motion.div>

              <motion.div style={{ width: "100%" }} variants={itemVariants}>
                <FormControl isInvalid={formik.touched.comment && formik.errors.comment}>
                  <FormLabel htmlFor="comment" fontSize={{ base: "sm", md: "md" }}>
                    Your message
                  </FormLabel>
                  <Textarea
                    id="comment"
                    name="comment"
                    height={{ base: 150, md: 200, lg: 250 }}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.comment}
                    bg="whiteAlpha.100"
                    border="1px solid"
                    borderColor="whiteAlpha.300"
                    _hover={{ borderColor: "whiteAlpha.500" }}
                    _focus={{ borderColor: "purple.300", boxShadow: "0 0 0 1px #D8B4FE" }}
                    fontSize={{ base: "sm", md: "md" }}
                  />
                  <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
                </FormControl>
              </motion.div>

              <motion.div
                style={{ width: "100%" }}
                variants={itemVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Button
                  as={motion.button}
                  type="submit"
                  colorScheme="purple"
                  width="full"
                  isLoading={isLoading}
                  variants={buttonVariants}
                  size={{ base: "md", md: "lg" }}
                  fontSize={{ base: "sm", md: "md" }}
                >
                  Submit
                </Button>
              </motion.div>
            </VStack>
          </form>
        </MotionBox>
      </MotionVStack>
    </FullScreenSection>
  );
};

export default ContactMeSection;