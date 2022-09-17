/* eslint-disable react-hooks/exhaustive-deps */
import { Chip, Grid, Pagination } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useEffect } from "react";
import { useState } from "react";
import BasicCard from "./Card";

const Repolist = ({ ...props }) => {
  let [repolist, setRepolist] = useState([]);
  let [data, setData] = useState({});
  const [page, setPage] = React.useState(1);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const getdetails = async () => {
    const response = await fetch(
      `https://api.github.com/users/${props.username}`
    );
    const data = await response.json();
    setData(data);
  };

  const getRepos = async (page) => {
    const response = await fetch(
      `https://api.github.com/users/${props.username}/repos?per_page=4&page=${page}`
    );

    const data = await response.json();
    setRepolist(data);
  };

  useEffect(() => {
    getRepos(page);
    getdetails();
  }, []);

  useEffect(() => {
    getRepos(page);
  }, [page]);

  return (
    <>
      <Grid container spacing={10} p={5}>
        {repolist.length
          ? repolist.map((data, index) => {
              return (
                <Grid item xs="12" md="6" key={`card${index}`}>
                  <BasicCard data={data} />
                </Grid>
              );
            })
          : ""}
      </Grid>

      <Grid container>
        <Grid
          xs={12}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          mt={2}
          mb={4}
        >
          <Pagination
            count={
              data.public_repos % 4 > 0
                ? Math.floor(data.public_repos / 4) + 1
                : Math.floor(data.public_repos / 4)
            }
            color="primary"
            shape="rounded"
            defaultPage={page}
            page={page}
            onChange={handleChange}
          />
        </Grid>

        <Grid
          xs={12}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          mb={10}
        >
          <Stack direction="row" spacing={15}>
            <Chip label="<- Older" variant="outlined" />
            <Chip label="Newer ->" variant="outlined" />
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default Repolist;
