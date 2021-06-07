import React, { useState } from "react";
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
  Box,
} from "@chakra-ui/react";

const AddMovieModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    releaseDate: "",
    image: "",
  });

  const { title, slug, releaseDate, image } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSave = (e) => {
    console.log(formData);
    e.preventDefault();
      setFormData({
        title: "",
        slug: "",
        releaseDate: "",
        image: "",
      })
  };

  return (
    <>
      <Box mb={2} pos="relative">
        <Button onClick={onOpen} width="8rem">
          Add
        </Button>
      </Box>
      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Movie</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Movie Title</FormLabel>
              <Input
                placeholder="Movie Title"
                variant="flushed"
                type="text"
                name="title"
                value={title}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Release Date</FormLabel>
              <Input
                placeholder="Slug"
                variant="flushed"
                type="text"
                name="slug"
                value={slug}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Release Date</FormLabel>
              <Input
                placeholder="Release Date"
                variant="flushed"
                type="date"
                name="releaseDate"
                value={releaseDate}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Image</FormLabel>
              <Input
                type="file"
                placeholder="Image"
                name="image"
                value={image}
                onChange={handleChange}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onSave}>
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
