import Movies from "../components/screens/movies";
import Persons from "../components/screens/persons";
import Screening from "../components/screens/screening";
import { useContext, useEffect } from "react";
import { RouteContext } from "./_app";
import { getMovies } from "../helper/api";
import PageLayout from "../components/PageLayout";

export default function Home({ movies }) {

  const currentRoute = useContext(RouteContext);

  return (
    <PageLayout className="">
      {currentRoute === "movies" && <Movies movie={movies}/>}
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
