import React, { useEffect, useRef, useState } from "react";
import Container from "@mui/material/Container";
import {
  Avatar,
  Button,
  TextField,
  Typography,
} from "@mui/material";
import "@fontsource/roboto/700.css";
import { Stack } from "@mui/system";
import BIRDS from "vanta/dist/vanta.waves.min";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

const Home = () => {
  const [name, setName] = useState("");
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: myRef.current,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  let navigate = useNavigate();

  const searchUser = () => {
    navigate(`/${name}`);
  };

  return (
    <>
      <div ref={myRef}>
        <Container
          maxWidth="md"
          style={{
            height: "100vh",
            display: "flex",
            color: "white",
            justifyContent: "center",
            alignItems: "center",
            // backgroundColor: "blue",
          }}
        >
          <Stack justifyContent="center" alignItems="center" spacing={2}>
            <Avatar
              alt="Remy Sharp"
              src="https://pnggrid.com/wp-content/uploads/2022/03/Github-Logo-White.png"
              sx={{ width: 75, height: 75, background: "black" }}
              mb="2"
            />

            <Typography variant="h4" component="h2" mb="20">
              Enter your <span style={{ color: "black" }}>GitHub</span>{" "}
              username to get your public Repositories lists.
            </Typography>

            <Stack direction="row" spacing={0}>
              <TextField
                id="outlined-basic"
                label="Enter-Username"
                variant="outlined"
                mb="2"
                maxWidth="50%"
                style={{ color: "white", background: "white" }}
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                onKeyDown={(e) => {
                  // eslint-disable-next-line no-unused-expressions
                  e.key === "Enter" ? searchUser() : null
                }}
              />
              <Button
                variant="contained"
                onClick={searchUser}
                startIcon={<SearchIcon />}
              >
                Search
              </Button>
            </Stack>
          </Stack>
        </Container>
      </div>
    </>
  );
};

export default Home;
