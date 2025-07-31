import * as React from "react";
import { VStack } from "@chakra-ui/react";

/**
 * FullScreenSection component
 * Wraps children with full screen vertical stack
 * and allows custom background color and dark mode styling
 */
const FullScreenSection = ({ children, isDarkBackground = false, ...boxProps }) => {
  return (
    <VStack
      backgroundColor={boxProps.backgroundColor}
      color={isDarkBackground ? "white" : "black"}
      width="100%"
    >
      <VStack
        maxWidth="1280px"
        minHeight="100vh"
        width="100%"
        alignItems="flex-start"
        {...boxProps}
      >
        {children}
      </VStack>
    </VStack>
  );
};

export default FullScreenSection;
