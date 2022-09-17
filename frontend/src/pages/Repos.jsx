import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Repolist from "../components/Repolist";
import Userdetails from "../components/Userdetails";

const Repos = () => {
  let params = useParams();

  return (
    <>
      <Userdetails username={params.username} />
      <Repolist username={params.username} />
    </>
  );
};

export default Repos;
