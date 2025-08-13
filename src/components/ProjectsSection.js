import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, SimpleGrid, useBreakpointValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Card from "./Card";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);

const projects = [
  {
    title: "React Space",
    description:
      "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️",
    getImageSrc: () => require("../images/photo1.jpg"),
  },
  {
    title: "React Infinite Scroll",
    description:
      "A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land 🔥️",
    getImageSrc: () => require("../images/photo2.jpg"),
  },
  {
    title: "Photo Gallery",
    description:
      "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income",
    getImageSrc: () => require("../images/photo3.jpg"),
  },
  {
    title: "Event planner",
    description:
      "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
    getImageSrc: () => require("../images/photo4.jpg"),
  },
];

const ProjectsSection = () => {
  const columns = useBreakpointValue({
    base: 1,
    md: 2,
    lg: 2
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={{ base: 4, md: 8 }}
      alignItems="flex-start"
      spacing={8}
      position="relative"
      overflow="hidden"
    >
      {/* Background decorative elements */}
      <Box
        position="absolute"
        top="20%"
        right="10%"
        width="200px"
        height="200px"
        borderRadius="50%"
        bg="rgba(34, 197, 94, 0.05)"
        as={motion.div}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <Box
        position="absolute"
        bottom="10%"
        left="5%"
        width="150px"
        height="150px"
        borderRadius="50%"
        bg="rgba(34, 197, 94, 0.03)"
        as={motion.div}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <MotionBox
        width="100%"
        maxWidth="1200px"
        mx="auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <MotionHeading
          as="h1"
          id="projects-section"
          fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
          mb={{ base: 6, md: 12 }}
          textAlign={{ base: "center", md: "left" }}
          variants={headingVariants}
          bgGradient="linear(to-r, green.200, teal.200)"
          bgClip="text"
          position="relative"
          _after={{
            content: '""',
            position: "absolute",
            bottom: "-8px",
            left: { base: "50%", md: 0 },
            transform: { base: "translateX(-50%)", md: "none" },
            width: "60px",
            height: "4px",
            bg: "green.400",
            borderRadius: "2px"
          }}
        >
          Featured Projects
        </MotionHeading>

        <MotionBox variants={gridVariants}>
          <SimpleGrid
            columns={columns}
            spacing={{ base: 6, md: 8 }}
            width="100%"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                      ease: "easeOut"
                    }
                  }
                }}
              >
                <Card
                  title={project.title}
                  description={project.description}
                  imageSrc={project.getImageSrc()}
                />
              </motion.div>
            ))}
          </SimpleGrid>
        </MotionBox>

        {/* Additional CTA Section */}
        <MotionBox
          mt={{ base: 8, md: 12 }}
          textAlign="center"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.6,
                delay: 0.8,
                ease: "easeOut"
              }
            }
          }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Box
              as="button"
              px={{ base: 6, md: 8 }}
              py={{ base: 3, md: 4 }}
              bg="transparent"
              border="2px solid"
              borderColor="green.400"
              color="white"
              borderRadius="full"
              fontWeight="bold"
              fontSize={{ base: "sm", md: "md" }}
              transition="all 0.3s ease"
              _hover={{
                bg: "green.400",
                color: "green.900",
                transform: "translateY(-2px)",
                shadow: "xl"
              }}
              onClick={() => {
                const element = document.getElementById("contactme-section");
                if (element) {
                  element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
            >
              Want to see more? Let's talk!
            </Box>
          </motion.div>
        </MotionBox>
      </MotionBox>
    </FullScreenSection>
  );
};

export default ProjectsSection;