import client from "../helper/sanityClient";

export const getMovies = async () => {
  const res = await client.fetch(`*[_type == "movie"]`);
  return res;
};
