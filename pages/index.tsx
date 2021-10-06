import PageLayout from "@components/PageLayout";
import Movies from "@components/screens/movies";
import Persons from "@components/screens/persons";
import Screening from "@components/screens/screening";
import { useContext } from "react";
import { getMovies } from "../helper/api";
import { RouteContext } from "./_app";

export default function Home({ movies }) {
  const currentRoute = useContext(RouteContext);

  return (
    <PageLayout className="">
      {currentRoute === "movies" && <Movies movie={movies} />}
      {currentRoute === "person" && <Persons />}
      {currentRoute === "screening" && <Screening />}
      <p>Hello</p>
    </PageLayout>
  );
}

export const getStaticProps = async () => {
  const movies = await getMovies();
  return {
    props: {
      movies,
    },
  };
};
