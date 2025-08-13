import React from "react";
import {
  Box,
  Flex,
  Text,
  HStack,
  Icon,
  Link,
  VStack,
  useBreakpointValue,
  Divider
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaHeart } from "react-icons/fa";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

const Footer = () => {
  const direction = useBreakpointValue({ base: "column", md: "row" });
  const spacing = useBreakpointValue({ base: 4, md: 0 });
  const textAlign = useBreakpointValue({ base: "center", md: "left" });

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const socialIconVariants = {
    hover: {
      scale: 1.3,
      rotate: 15,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const heartVariants = {
    animate: {
      scale: [1, 1.2, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <MotionBox
      backgroundColor="#18181b"
      color="white"
      py={{ base: 6, md: 8 }}
      borderTop="1px solid"
      borderColor="whiteAlpha.200"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <MotionFlex
        margin="0 auto"
        px={{ base: 4, md: 12 }}
        maxWidth="1280px"
        alignItems="center"
        justifyContent="space-between"
        flexDirection={direction}
        gap={spacing}
      >
        <motion.div variants={itemVariants}>
          <VStack spacing={2} align={textAlign}>
            <Text
              fontWeight="bold"
              fontSize={{ base: "md", md: "lg" }}
              bgGradient="linear(to-r, teal.300, purple.400)"
              bgClip="text"
            >
              Pete • © {new Date().getFullYear()}
            </Text>
            <HStack spacing={1} fontSize="sm" color="whiteAlpha.700">
              <Text>Made with</Text>
              <motion.div variants={heartVariants} animate="animate">
                <Icon as={FaHeart} color="red.400" />
              </motion.div>
              <Text>and lots of coffee</Text>
            </HStack>
          </VStack>
        </motion.div>

        {direction === "column" && <Divider borderColor="whiteAlpha.200" />}

        <motion.div variants={itemVariants}>
          <HStack
            spacing={{ base: 6, md: 8 }}
            flexWrap="wrap"
            justify="center"
          >
            {[
              { href: "/help", label: "Help" },
              { href: "/faq", label: "FAQ" },
              { href: "/contact", label: "Contact Us" }
            ].map((link) => (
              <motion.div
                key={link.label}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={link.href}
                  fontSize={{ base: "sm", md: "md" }}
                  position="relative"
                  _after={{
                    content: '""',
                    position: "absolute",
                    bottom: "-2px",
                    left: 0,
                    width: 0,
                    height: "1px",
                    bg: "teal.300",
                    transition: "width 0.3s ease"
                  }}
                  _hover={{
                    textDecoration: "none",
                    color: "teal.300",
                    _after: {
                      width: "100%"
                    }
                  }}
                  transition="color 0.2s ease"
                >
                  {link.label}
                </Link>

              </motion.div>
            ))}
          </HStack>
        </motion.div>

        {direction === "column" && <Divider borderColor="whiteAlpha.200" />}

        <motion.div variants={itemVariants}>
          <HStack spacing={4}>
            {[
              { icon: FaFacebook, href: "https://facebook.com", label: "Facebook" },
              { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" }
            ].map((social) => (
              <motion.div
                key={social.label}
                variants={socialIconVariants}
                whileHover="hover"
              >
                <Link href={social.href} isExternal aria-label={social.label}>
                  <Box
                    p={2}
                    borderRadius="full"
                    bg="whiteAlpha.100"
                    _hover={{
                      bg: "whiteAlpha.200",
                      transform: "translateY(-2px)",
                    }}
                    transition="all 0.3s ease"
                  >
                    <Icon
                      as={social.icon}
                      boxSize={{ base: 4, md: 5 }}
                      color="whiteAlpha.800"
                      _hover={{ color: "white" }}
                    />
                  </Box>
                </Link>
              </motion.div>
            ))}
          </HStack>
        </motion.div>
      </MotionFlex>

      {/* Bottom section with additional info */}
      <motion.div variants={itemVariants}>
        <Box mt={6} pt={4} borderTop="1px solid" borderColor="whiteAlpha.100">
          <Text
            textAlign="center"
            fontSize="xs"
            color="whiteAlpha.500"
            maxWidth="600px"
            mx="auto"
            px={4}
          >
            This portfolio showcases my passion for creating beautiful, functional web experiences.
            All projects are built with modern technologies and best practices in mind.
          </Text>
        </Box>
      </motion.div>
    </MotionBox>
  );
};

export default Footer;