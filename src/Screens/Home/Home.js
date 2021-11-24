import React from "react";
import { GET_SINGLE_REPO } from "../../Graphql/Queries/GithubQueries";
import { useQuery, gql } from "@apollo/client";
const Home = () => {
  const {
    data,
    refetch,
    loading: contentLoading,
    error,
  } = useQuery(gql(GET_SINGLE_REPO));

  console.log(data, "RESP");
  console.log(error, "R");
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
