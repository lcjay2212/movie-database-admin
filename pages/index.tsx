import PageLayout from "../components/PageLayout";
import Movies from "../components/screens/movies";
import Persons from "../components/screens/persons";
import Screening from "../components/screens/screening";
import { useContext } from "react";
import { RouteContext } from "./_app";


export default function Home() {
 
  // console.log(router, "here");
  const currentRoute = useContext(RouteContext);
  
  return (
   <PageLayout className="">
     {
       currentRoute === 'movies' && <Movies/>
     }

     {
       currentRoute === 'person' && <Persons/>
     }
    {
       currentRoute === 'screening' && <Screening/>
     }
   </PageLayout>
  );
}
