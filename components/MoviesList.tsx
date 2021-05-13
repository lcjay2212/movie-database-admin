import { SearchIcon } from "@chakra-ui/icons";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Container,
  Box,
  Button,
  Input,
  Grid,
} from "@chakra-ui/react";
import AddMovieModal from "../components/AddMovieModal";

const MoviesList = () => {
  return (
    <Container p={5}>
      <Grid templateColumns="repeat(2, 1fr)" gap={1} mb={1}>
        <Input placeholder="Search" width="20rem" mr={3} p="21px"></Input>
        <AddMovieModal />
      </Grid>
      <Box pos="relative"></Box>
      <Table variant="striped" colorScheme="teal">
        <TableCaption>Imperial to metric conversion factors</TableCaption>

        <Thead border="1px solid">
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Thead>
        <Tbody border="1px solid">
          <Tr>
            <Td>inches</Td>
            <Td>millimetres (mm)</Td>
            <Td isNumeric>25.4</Td>
          </Tr>
          <Tr>
            <Td>feet</Td>
            <Td>centimetres (cm)</Td>
            <Td isNumeric>30.48</Td>
          </Tr>
          <Tr>
            <Td>yards</Td>
            <Td>metres (m)</Td>
            <Td isNumeric>0.91444</Td>
          </Tr>
        </Tbody>
        <Tfoot border="1px solid">
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Tfoot>
      </Table>
    </Container>
  );
};

export default MoviesList;
