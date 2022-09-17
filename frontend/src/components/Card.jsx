import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Avatar, Chip, Link, Stack } from "@mui/material";
import { useState } from "react";

export default function BasicCard({ ...props }) {
  let [languages, setLanguages] = useState([]);

  const getdetails = async () => {
    const response = await fetch(
      `https://api.github.com/repos/${props.data.owner.login}/${props.data.name}/languages`
    );
    const data = await response.json();
    console.log(data);
    setLanguages(data);
  };

  React.useEffect(() => {
    getdetails();
  }, []);

  return (
    <Card sx={{ minWidth: 150,minHeight: 180 }} elevation={3}>
      <CardContent>
        <Typography textAlign="start" variant="h5" component="div" gutterBottom>
          <Link href={props.data.html_url} underline="hover">
            {props.data.name ? props.data.name : ""}
          </Link>
        </Typography>

        <Typography textAlign="start" sx={{ mb: 2 }} color="text.secondary">
          {props.data.description
            ? props.data.description
            : "no description avaliable"}
        </Typography>

        <Stack direction="row" spacing={1} sx={{ mb: 0 }}>
          <Typography textAlign="start" sx={{ mb: 1.5 }} color="text.secondary">
            owner :
          </Typography>
          <Stack direction="row" spacing={1}>
            <Avatar
              alt="Remy Sharp"
              src={props.data.owner ? props.data.owner.avatar_url : ""}
              sx={{ width: 24, height: 24 }}
            />
            <Typography
              textAlign="start"
              sx={{ mb: 1.5 }}
              color="text.secondary"
            >
              <Link href={props.data.owner.html_url} underline="hover" color="text.secondary">
                {props.data.owner ? props.data.owner.login : ""}
              </Link>
            </Typography>
          </Stack>
        </Stack>

        <Stack direction="row" spacing={1}>
          <Typography textAlign="start" sx={{ mb: 1.5 }} color="text.secondary">
            languages :
          </Typography>
          <Stack direction="row" spacing={1}>
            {Object.keys(languages).map((key) => {
              return <Chip label={key} color="primary" />;
            })}
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
