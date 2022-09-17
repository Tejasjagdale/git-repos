/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Avatar, Chip, Link, Skeleton, Stack } from "@mui/material";
import { useState } from "react";

export default function BasicCard({ ...props }) {
  let [languages, setLanguages] = useState([]);

  const getdetails = async () => {
    if (props.data.owner) {
      const response = await fetch(
        `https://api.github.com/repos/${props.data.owner.login}/${props.data.name}/languages`
      );
      const data = await response.json();
      setLanguages(data);
    }
  };

  React.useEffect(() => {
    getdetails();
  }, []);

  return (
    <Card sx={{ minWidth: 150, minHeight: 180 }} elevation={3}>
      <CardContent>
        {props.isloading ? (
          <Skeleton animation="wave" />
        ) : (
          <Typography
            textAlign="start"
            variant="h5"
            component="div"
            gutterBottom
          >
            <Link
              href={props.data ? props.data.html_url : "#"}
              underline="hover"
            >
              {props.data.name ? props.data.name : ""}
            </Link>
          </Typography>
        )}

        {props.isloading ? (
          <Skeleton animation="wave" />
        ) : (
          <Typography textAlign="start" sx={{ mb: 2 }} color="text.secondary">
            {props.data.description
              ? props.data.description
              : "no description avaliable"}
          </Typography>
        )}

        {props.isloading ? (
          <Skeleton animation="wave" />
        ) : (
          <Stack
            direction={{ md: "row", xs: "column" }}
            spacing={1}
            sx={{ mb: 1.5 }}
          >
            <Typography textAlign="start" color="text.secondary">
              owner :
            </Typography>
            <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
              <Avatar
                alt="Remy Sharp"
                src={
                  props.data.owner && props.data.owner
                    ? props.data.owner.avatar_url
                    : ""
                }
                sx={{ width: 24, height: 24 }}
              />
              <Typography textAlign="start" color="text.secondary">
                <Link
                  href={
                    props.data.owner && props.data.owner.html_url
                      ? props.data.owner.html_url
                      : "#"
                  }
                  underline="hover"
                  color="text.secondary"
                >
                  {props.data && props.data.owner ? props.data.owner.login : ""}
                </Link>
              </Typography>
            </Stack>
          </Stack>
        )}

        {props.isloading ? (
          <Skeleton animation="wave" />
        ) : (
          <Stack direction={{ md: "row", xs: "column" }} spacing={1}>
            <Typography
              textAlign="start"
              sx={{ mb: 1.5 }}
              color="text.secondary"
            >
              languages :
            </Typography>
            <Stack direction="row" spacing={1}>
              {Object.keys(languages).map((key) => {
                return <Chip key={key} label={key} color="primary" />;
              })}
            </Stack>
          </Stack>
        )}
      </CardContent>
    </Card>
  );
}
