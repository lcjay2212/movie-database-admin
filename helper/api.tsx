import client from "../helper/sanityClient";

const moviesData = `
  title,
  releaseDate,
  externalId,
  castMembers,
  crewMembers,
  overview,
  popularity,
  'poster': poster.asset->url,
  'slug': slug.current,
  'director': director->{name, 'image': image.asset->url}, `;
  

const personsData = `
  'image' : image.asset->url,
  name,
  'slug': slug.current,`;

// const {title, slug, image, releaseDate} = formData;

type Movie = {
  title: string,
  slug: string,
  image: string,
  releaseDate: string,
}


export const getMovies = async () => {
  const res = await client.fetch(`*[_type == "movie"]{${moviesData}}`);
  return res;
};

export const getPerson = async () => {
  const res = await client.fetch(`*[_type == "person"]{${personsData}}`);
  return res;
};

export const getScreening = async () => {
  const res = await client.fetch(`*[_type == "screening"]`);
  return res;
};

export const addMovie = async ({ data }: { data: Array<Movie> }) => {
  const res = await client.fetch(`[_type == "post"]{${data}}`)
  return res;
}
