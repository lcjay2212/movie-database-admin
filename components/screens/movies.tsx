import React from "react";
import { getMovies } from "../../helper/api";
import TableList from "../Table";
import PageLayout from "../PageLayout";
import { SearchIcon } from "@chakra-ui/icons";
import {
  Input,
  Grid,
  InputGroup,
  InputRightElement,
  Container,
} from "@chakra-ui/react";
import AddMovieModal from "../AddMovieModal";

const Movies = ({ movie }) => {
  return (
    <PageLayout className="movies-table">
      <Container pt={5}>
        <Grid templateColumns="repeat(2, 1fr)" gap={1} mb={1}>
          <InputGroup>
            <Input placeholder="Search" width="20rem" variant="filled" />
            <InputRightElement>
              <SearchIcon color="teal" />
            </InputRightElement>
          </InputGroup>

          <AddMovieModal />
        </Grid>
      </Container>
      <TableList movie={movie} />
    </PageLayout>
  );
};

export default Movies;
