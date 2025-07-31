import React from "react";
import { Box, Flex, Text, HStack, Icon, Link } from "@chakra-ui/react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <Box backgroundColor="#18181b" color="white" py={4}>
      <Flex
        margin="0 auto"
        px={12}
        maxWidth="1280px"
        alignItems="center"
        justifyContent="space-between"
        flexWrap="wrap"
      >
        <Text fontWeight="bold">Pete • © {new Date().getFullYear()}</Text>

        <HStack spacing={8}>
          <Link href="/help" _hover={{ textDecoration: "underline" }}>Help</Link>
          <Link href="/faq" _hover={{ textDecoration: "underline" }}>FAQ</Link>
          <Link href="/contact" _hover={{ textDecoration: "underline" }}>Contact Us</Link>
        </HStack>

        <HStack spacing={4}>
          <Link href="https://facebook.com" isExternal>
            <Icon as={FaFacebook} boxSize={5} />
          </Link>
          <Link href="https://instagram.com" isExternal>
            <Icon as={FaInstagram} boxSize={5} />
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Footer;
