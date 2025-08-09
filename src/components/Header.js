import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, IconButton, Link, Text } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      zIndex="1000"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={4}>
              {socials.map((social, index) => (
                <Link key={index} href={social.url} isExternal>
                  <IconButton
                    icon={<FontAwesomeIcon icon={social.icon} />}
                    variant="ghost"
                    color="white"
                    aria-label={social.url}
                    _hover={{ color: "teal.300" }}
                  />
                </Link>
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <Text
                onClick={handleClick("projects")}
                cursor="pointer"
                _hover={{ color: "teal.300" }}
              >
                Projects
              </Text>
              <Text
                onClick={handleClick("contactme")}
                cursor="pointer"
                _hover={{ color: "teal.300" }}
              >
                Contact Me
              </Text>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;