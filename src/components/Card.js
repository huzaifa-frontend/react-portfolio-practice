import React from "react";
import {
  Box,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
  Link,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Card = ({ title, description, imageSrc }) => {
  return (
    <Box
      borderRadius="2xl"
      overflow="hidden"
      boxShadow="lg"
      backgroundColor="white"
      _hover={{ transform: "translateY(-5px)", transition: "0.3s" }}
    >
      <Image src={imageSrc} alt={title} objectFit="cover" width="100%" height="200px" />

      <VStack align="start" spacing={4} p={4}>
        <Heading as="h3" size="md">
          {title}
        </Heading>
        <Text color="gray.600">{description}</Text>

        <HStack spacing={2}>
          <Link
            color="purple.600"
            fontWeight="bold"
            href="#"
            _hover={{ color: "purple.800", textDecoration: "underline" }}
          >
            View Project
          </Link>
          <FontAwesomeIcon icon={faArrowRight} color="#6B46C1" />
        </HStack>
      </VStack>
    </Box>
  );
};

export default Card;
