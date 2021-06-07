import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  Container,
  Box,
  Button,
  Center,
} from "@chakra-ui/react";
import dayjs from "dayjs";
import React from "react";

// const TableList = ({title, date, director}) => {
const TableList = ({ movie }) => {
  return (
    <Container p={5}>
      <Box pos="relative"></Box>
      <Table variant="striped" colorScheme="teal">
        <Thead border="1px solid">
          <Tr>
            <Th>Title</Th>
            <Th>Release Date</Th>
            <Th>Directed By</Th>
          </Tr>
        </Thead>
        <Tbody border="1px solid">
          {movie.map((q) => {
            return (
              <Tr key={q.slug}> 
                <Td>{q.title}</Td>
                <Td>{dayjs(q.releaseDate).format("MMM DD, YYYY")}</Td>
                <Td>{q.director?.name}</Td>{" "}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Container>
  );
};

export default TableList;
