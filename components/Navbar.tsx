import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Box,
  Flex,
  Link,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import React, { Dispatch, FC, SetStateAction } from "react";

const Navbar: FC<{
  setCurrentRoute: Dispatch<SetStateAction<string>>;
}> = ({ setCurrentRoute }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const navigate = (page: string) => {
    setCurrentRoute(page);
    onClose();
  };

  return (
    <>
      <Box bg="#282d39" w="100%" p={5} color="white">
        <Flex
          h={4}
          ml={10}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Button
            ref={btnRef}
            colorScheme="teal"
            onClick={onOpen}
            pos="absolute"
            top={0}
            left={0}
            mt={2}
            ml={1}
          >
            <HamburgerIcon />
          </Button>
          <Box>Admin</Box>
        </Flex>
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader textAlign="center">Admin</DrawerHeader>
          <DrawerBody>
            <Box mb={2}>
              <Button
                variant="solid"
                size="md"
                height="48px"
                width="17rem"
                onClick={() => navigate("movies")}
              >
                Movies
              </Button>
            </Box>
            <Box mb={2}>
              <Button
                variant="solid"
                size="md"
                height="48px"
                width="17rem"
                onClick={() => navigate("person")}
              >
                Person
              </Button>
            </Box>
            <Box mb={2}>
              <Button
                variant="solid"
                size="md"
                height="48px"
                width="17rem"
                onClick={() => navigate("screening")}
              >
                Screening
              </Button>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Navbar;
