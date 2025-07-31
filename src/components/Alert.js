import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogOverlay,
  CloseButton,
  HStack,
  Text,
} from "@chakra-ui/react";
import { CheckCircleIcon, WarningIcon } from "@chakra-ui/icons";
import { useRef, useEffect } from "react";
import { useAlertContext } from "../context/alertContext";

/**
 * This is a global component that uses context to display a global alert message.
 */
function Alert() {
  const { isOpen, type, message, onClose } = useAlertContext();
  const cancelRef = useRef();
  const isSuccess = type === "success";

  // Auto-close alert after 4 seconds
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(onClose, 4000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent
          py={4}
          backgroundColor={isSuccess ? "#81C784" : "#FF8A65"}
          position="relative"
        >
          {/* Close (X) Button */}
          <CloseButton
            position="absolute"
            right="8px"
            top="8px"
            onClick={onClose}
          />

          {/* Heading with icon */}
          <AlertDialogHeader>
            <HStack spacing={2}>
              {isSuccess ? (
                <CheckCircleIcon boxSize={5} />
              ) : (
                <WarningIcon boxSize={5} />
              )}
              <Text fontSize="lg" fontWeight="bold">
                {isSuccess ? "All good!" : "Oops!"}
              </Text>
            </HStack>
          </AlertDialogHeader>

          {/* Alert Body */}
          <AlertDialogBody>{message}</AlertDialogBody>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}

export default Alert;
