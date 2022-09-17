import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Repolist from "../components/Repolist";
import Userdetails from "../components/Userdetails";

const Repos = () => {
  let params = useParams();
  let navigate = useNavigate();

  const checkUser = async () => {
    const response = await fetch(
      `https://api.github.com/users/${params.username}`
    );
    if (response.status === 404) {
      navigate(`/`);
    }
  };

  useEffect(() => {
    checkUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div>
        <Userdetails username={params.username} />
        <Repolist username={params.username} />
      </div>
    </>
  );
};

export default Repos;
