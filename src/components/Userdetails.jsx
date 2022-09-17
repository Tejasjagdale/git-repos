import { Avatar, Grid, Link, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Userdetails = ({ ...props }) => {
  let [data, setData] = useState({});

  const getdetails = async () => {
    const response = await fetch(
      `https://api.github.com/users/${props.username}`
    );
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    getdetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Grid container>
        <Grid
          item
          md={2}
          sm={12}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Avatar
            alt="Remy Sharp"
            src={data.avatar_url ? data.avatar_url : ""}
            sx={{
              width: 150,
              height: 150,
              border: "2px solid black",
              marginTop: { md: 2, xs: 2 },
              marginLeft: { md: 4, xs: 4 },
            }}
          />
        </Grid>
        <Grid item md={10} sm={12}>
          <Stack spacing={2} mt={5}>
            <Typography
              variant="h6"
              textAlign="start"
              component="h2"
              sx={{
                pl: {
                  md: 10,
                  xs: 4,
                },
              }}
            >
              {data.login ? data.login : ""}
            </Typography>

            <Typography
              variant="h6"
              textAlign="start"
              component="h2"
              color="text.secondary"
              sx={{
                pl: {
                  md: 10,
                  xs: 4,
                },
              }}
            >
              {data.bio ? data.bio : "no bio"}
            </Typography>

            <Stack
              direction="row"
              spacing={2}
              sx={{
                pl: {
                  md: 10,
                  xs: 4,
                },
              }}
            >
              <LocationOnIcon />
              <Typography color="text.secondary" variant="h6" component="h2">
                {data.location ? data.location : "no location avaliable"}
              </Typography>
            </Stack>

            <Stack
              direction="row"
              spacing={1}
              sx={{
                pl: {
                  md: 10,
                  xs: 4,
                },
              }}
            >
              <Typography color="text.secondary" variant="text" component="h4">
                Twitter:
              </Typography>
              <Typography variant="text" component="h4">
                <Link
                  href={`https://twitter.com/${data.twitter_username}`}
                  underline="hover"
                >
                  {data.twitter_username
                    ? `https://twitter.com/${data.twitter_username}`
                    : "no twiter"}
                </Link>
              </Typography>
            </Stack>
          </Stack>
        </Grid>

        <Grid
          item
          xs={12}
          mt={5}
          mb={5}
          sx={{
            pl: {
              md: 10,
              xs: 4,
            },
          }}
        >
          <Stack direction="row" spacing={{ md: 2, sm: 0 }}>
            <InsertLinkIcon />
            <Link href={data.html_url} underline="hover">
              {data.html_url}
            </Link>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default Userdetails;
