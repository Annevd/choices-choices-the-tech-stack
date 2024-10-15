import { GraphQLClient } from 'graphql-request';

const HYGRAPH_KEY = import.meta.env.HYGRAPH_KEY; // Access from the .env file
const HYGRAPH_URL = import.meta.env.HYGRAPH_URL; // Access from the .env file

export const hygraph = new GraphQLClient(HYGRAPH_URL, {
  headers: {
    Authorization: `Bearer ${HYGRAPH_KEY}`
  }
});