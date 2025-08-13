import React from "react";
import { Avatar, Heading, VStack, Text, Button, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ChevronDownIcon } from "@chakra-ui/icons";
import FullScreenSection from "./FullScreenSection";

const MotionVStack = motion(VStack);
const MotionAvatar = motion(Avatar);
const MotionHeading = motion(Heading);
const MotionBox = motion(Box);

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

const LandingSection = () => {
  const handleScrollToProjects = () => {
    const element = document.getElementById("projects-section");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const avatarVariants = {
    hidden: { opacity: 0, scale: 0.5, rotate: -180 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const chevronVariants = {
    initial: { y: 0 },
    animate: {
      y: [0, 10, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <FullScreenSection
      justifyContent="center"
      alignItems="center"
      isDarkBackground
      backgroundColor="#2A4365"
      position="relative"
      overflow="hidden"
    >
      {/* Background floating elements */}
      <Box
        position="absolute"
        top="10%"
        left="10%"
        width="100px"
        height="100px"
        borderRadius="50%"
        bg="rgba(139, 92, 246, 0.1)"
        as={motion.div}
        animate={{
          y: [-20, 20, -20],
          x: [-10, 10, -10],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <Box
        position="absolute"
        top="70%"
        right="15%"
        width="60px"
        height="60px"
        borderRadius="50%"
        bg="rgba(56, 178, 172, 0.1)"
        as={motion.div}
        animate={{
          y: [20, -20, 20],
          x: [10, -10, 10],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <MotionVStack
        spacing={{ base: 4, md: 6 }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        textAlign="center"
        px={{ base: 4, md: 8 }}
        maxWidth="800px"
      >
        <MotionAvatar
          src="https://i.pravatar.cc/150?img=7"
          size={{ base: "xl", md: "2xl" }}
          name="Pete"
          variants={avatarVariants}
          whileHover="hover"
          animate={pulseAnimation}
          border="4px solid"
          borderColor="whiteAlpha.300"
          shadow="2xl"
        />

        <motion.div variants={itemVariants}>
          <MotionHeading
            size={{ base: "lg", md: "xl" }}
            color="white"
            fontWeight="medium"
            animate={floatingAnimation}
          >
            {greeting}
          </MotionHeading>
        </motion.div>

        <motion.div variants={itemVariants}>
          <MotionHeading
            size={{ base: "xl", md: "2xl" }}
            color="white"
            fontWeight="bold"
            bgGradient="linear(to-r, teal.300, purple.400)"
            bgClip="text"
          >
            {bio1}
          </MotionHeading>
        </motion.div>

        <motion.div variants={itemVariants}>
          <MotionHeading
            size={{ base: "xl", md: "2xl" }}
            color="white"
            fontWeight="bold"
            bgGradient="linear(to-r, purple.400, pink.400)"
            bgClip="text"
          >
            {bio2}
          </MotionHeading>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Text
            fontSize={{ base: "md", md: "lg" }}
            color="whiteAlpha.800"
            maxWidth="600px"
            lineHeight="1.6"
            mt={4}
          >
            Passionate about creating beautiful, functional, and user-friendly web applications
            that make a difference in people's lives.
          </Text>
        </motion.div>

        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            colorScheme="teal"
            size={{ base: "md", md: "lg" }}
            mt={6}
            onClick={handleScrollToProjects}
            rightIcon={<ChevronDownIcon />}
            bg="teal.500"
            _hover={{
              bg: "teal.600",
              transform: "translateY(-2px)",
              shadow: "xl"
            }}
            transition="all 0.3s ease"
          >
            View My Work
          </Button>
        </motion.div>
      </MotionVStack>

      {/* Scroll indicator */}
      <MotionBox
        position="absolute"
        bottom="8"
        left="50%"
        transform="translateX(-50%)"
        variants={chevronVariants}
        initial="initial"
        animate="animate"
        cursor="pointer"
        onClick={handleScrollToProjects}
      >
        <ChevronDownIcon
          boxSize={8}
          color="whiteAlpha.700"
          _hover={{ color: "white" }}
          transition="color 0.2s ease"
        />
      </MotionBox>
      </FullScreenSection>
  )}

  export default LandingSection;