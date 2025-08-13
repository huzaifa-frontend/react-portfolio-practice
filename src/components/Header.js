import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import {
  Box,
  HStack,
  IconButton,
  Link,
  Text,
  useBreakpointValue,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  VStack,
  Button
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { HamburgerIcon } from "@chakra-ui/icons";

const MotionBox = motion(Box);
const MotionHStack = motion(HStack);

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
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const isMobile = useBreakpointValue({ base: true, md: false });
  const headerPadding = useBreakpointValue({ base: 4, md: 8, lg: 16 });

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setPrevScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollY]);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    onClose(); // Close mobile menu if open
  };

  const headerVariants = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    hidden: {
      y: -100,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const socialVariants = {
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const navItemVariants = {
    hover: {
      scale: 1.05,
      y: -2,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <MotionBox
          position="fixed"
          top={0}
          left={0}
          right={0}
          backgroundColor="rgba(24, 24, 27, 0.95)"
          backdropFilter="blur(10px)"
          borderBottom="1px solid"
          borderColor="whiteAlpha.200"
          zIndex="1000"
          variants={headerVariants}
          initial="visible"
          animate="visible"
          exit="hidden"
        >
          <Box color="white" maxWidth="1280px" margin="0 auto">
            <HStack
              px={headerPadding}
              py={4}
              justifyContent="space-between"
              alignItems="center"
            >
              {/* Social Links - Desktop */}
              {!isMobile && (
                <nav>
                  <MotionHStack
                    spacing={2}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    {socials.map((social, index) => (
                      <motion.div
                        key={index}
                        variants={socialVariants}
                        whileHover="hover"
                      >
                        <Link href={social.url} isExternal>
                          <IconButton
                            icon={<FontAwesomeIcon icon={social.icon} />}
                            variant="ghost"
                            color="white"
                            aria-label={social.url}
                            size="sm"
                            _hover={{
                              color: "teal.300",
                              bg: "whiteAlpha.200"
                            }}
                          />
                        </Link>
                      </motion.div>
                    ))}
                  </MotionHStack>
                </nav>
              )}

              {/* Navigation - Desktop */}
              {!isMobile && (
                <nav>
                  <MotionHStack
                    spacing={8}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    {['projects', 'contactme'].map((item) => (
                      <motion.div
                        key={item}
                        variants={navItemVariants}
                        whileHover="hover"
                      >
                        <Text
                          onClick={handleClick(item)}
                          cursor="pointer"
                          fontWeight="medium"
                          textTransform="capitalize"
                          position="relative"
                          transition="color 0.2s ease"
                          _after={{
                            content: '""',
                            position: "absolute",
                            bottom: "-4px",
                            left: 0,
                            width: 0,
                            height: "2px",
                            bg: "teal.300",
                            transition: "width 0.3s ease"
                          }}
                          _hover={{
                            color: "teal.300",
                            _after: {
                              width: "100%"
                            }
                          }}
                        >
                          {item === 'contactme' ? 'Contact Me' : 'Projects'}
                        </Text>
                      </motion.div>
                    ))}
                  </MotionHStack>
                </nav>
              )}

              {/* Mobile Menu Button */}
              {isMobile && (
                <>
                  <Box /> {/* Spacer */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconButton
                      aria-label="Open Menu"
                      icon={<HamburgerIcon />}
                      variant="ghost"
                      color="white"
                      onClick={onOpen}
                      _hover={{ bg: "whiteAlpha.200" }}
                    />
                  </motion.div>
                </>
              )}
            </HStack>
          </Box>

          {/* Mobile Drawer */}
          <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent bg="gray.900" color="white">
              <DrawerCloseButton />
              <DrawerHeader borderBottomWidth="1px" borderColor="gray.700">
                Menu
              </DrawerHeader>
              <DrawerBody>
                <VStack spacing={6} align="stretch" mt={8}>
                  {/* Social Links */}
                  <VStack spacing={4}>
                    <Text fontWeight="bold" color="gray.400" fontSize="sm">
                      Connect
                    </Text>
                    <HStack spacing={4} justify="center">
                      {socials.map((social, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Link href={social.url} isExternal>
                            <IconButton
                              icon={<FontAwesomeIcon icon={social.icon} />}
                              variant="ghost"
                              color="white"
                              aria-label={social.url}
                              _hover={{
                                color: "teal.300",
                                bg: "whiteAlpha.200"
                              }}
                            />
                          </Link>
                        </motion.div>
                      ))}
                    </HStack>
                  </VStack>

                  {/* Navigation Links */}
                  <VStack spacing={4} mt={8}>
                    {['projects', 'contactme'].map((item) => (
                      <motion.div
                        key={item}
                        style={{ width: "100%" }}
                        whileHover={{ x: 10 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          variant="ghost"
                          size="lg"
                          width="100%"
                          justifyContent="flex-start"
                          onClick={handleClick(item)}
                          _hover={{
                            bg: "whiteAlpha.100",
                            color: "teal.300"
                          }}
                        >
                          {item === 'contactme' ? 'Contact Me' : 'Projects'}
                        </Button>
                      </motion.div>
                    ))}
                  </VStack>
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </MotionBox>
      )}
    </AnimatePresence>
  );
};

export default Header;