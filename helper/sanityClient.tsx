import sanityClient from "@sanity/client";

export default sanityClient({
  dataset: process.env.NEXT_SANITY_DATASET_NAME,
  projectId: process.env.NEXT_SANITY_PROJECT_ID,
  useCdn: process.env.NODE_ENV === "production",
  apiVersion: "2021-03-25",
});
