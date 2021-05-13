import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Input,
  Box
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const AddMovieModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box mb={2} pos="relative">
        <Button  onClick={onOpen} width="8rem">Add</Button>
        </Box>
      <Modal
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Movie</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Movie Title</FormLabel>
              <Input placeholder="First name" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Release Date</FormLabel>
              <Input placeholder="Release Date" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Image</FormLabel>
              <Input type="file" placeholder="Image" />
            </FormControl>

          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddMovieModal;
