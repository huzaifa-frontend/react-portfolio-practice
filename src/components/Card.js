import React from "react";
import {
  Box,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
  Link,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const MotionBox = motion(Box);
const MotionImage = motion(Image);

const Card = ({ title, description, imageSrc }) => {
  const imageHeight = useBreakpointValue({
    base: "150px",
    sm: "180px",
    md: "200px"
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const arrowVariants = {
    initial: { x: 0 },
    hover: {
      x: 5,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <MotionBox
      borderRadius="2xl"
      overflow="hidden"
      boxShadow="xl"
      backgroundColor="white"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, amount: 0.3 }}
      cursor="pointer"
      position="relative"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(59, 130, 246, 0.1))",
        opacity: 0,
        transition: "opacity 0.3s ease",
        borderRadius: "2xl",
        zIndex: 1
      }}
      _hover={{
        _before: {
          opacity: 1
        }
      }}
    >
      <Box overflow="hidden" position="relative">
        <MotionImage
          src={imageSrc}
          alt={title}
          objectFit="cover"
          width="100%"
          height={imageHeight}
          variants={imageVariants}
        />
      </Box>

      <VStack align="start" spacing={{ base: 3, md: 4 }} p={{ base: 4, md: 6 }} position="relative" zIndex={2}>
        <Heading
          as="h3"
          size={{ base: "sm", md: "md" }}
          color="gray.800"
          lineHeight="1.2"
        >
          {title}
        </Heading>

        <Text
          color="gray.600"
          fontSize={{ base: "sm", md: "md" }}
          lineHeight="1.5"
          noOfLines={3}
        >
          {description}
        </Text>

        <motion.div
          initial="initial"
          whileHover="hover"
          style={{ width: "100%" }}
        >
          <HStack spacing={2} alignItems="center">
            <Link
              color="purple.600"
              fontWeight="bold"
              href="#"
              fontSize={{ base: "sm", md: "md" }}
              _hover={{
                color: "purple.800",
                textDecoration: "none",
                transform: "translateY(-1px)"
              }}
              transition="all 0.2s ease"
            >
              View Project
            </Link>
            <motion.div variants={arrowVariants}>
              <FontAwesomeIcon
                icon={faArrowRight}
                color="#6B46C1"
                size="sm"
              />
            </motion.div>
          </HStack>
        </motion.div>
      </VStack>

      {/* Subtle glow effect */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        borderRadius="2xl"
        boxShadow="0 0 0 1px rgba(139, 92, 246, 0)"
        transition="box-shadow 0.3s ease"
        _groupHover={{
          boxShadow: "0 0 20px rgba(139, 92, 246, 0.3)"
        }}
        pointerEvents="none"
      />
    </MotionBox>
  );
};

export default Card;