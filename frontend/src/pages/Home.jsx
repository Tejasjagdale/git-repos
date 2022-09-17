import React, { useEffect, useRef, useState } from "react";
import Container from "@mui/material/Container";
import { Avatar, TextField, Typography } from "@mui/material";
import "@fontsource/roboto/700.css";
import { Stack } from "@mui/system";
import BIRDS from "vanta/dist/vanta.net.min";

const Home = () => {
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

  return (
    <>
      <div ref={myRef}>
        <Container
          maxWidth="md"
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // backgroundColor: "blue",
          }}
        >
          <Stack justifyContent="center" alignItems="center" spacing={2}>
            <Avatar
              alt="Remy Sharp"
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              sx={{ width: 75, height: 75 }}
              mb="2"
            />

            <Typography variant="h4" component="h2" mb="20">
              Enter your <span style={{ color: "greenyellow" }}>GitHub</span>{" "}
              username to get your public Repositories lists.
            </Typography>

            <TextField
              id="outlined-basic"
              label="Enter-Username"
              variant="outlined"
              mb="2"
              maxWidth="50%"
            />
          </Stack>
        </Container>
      </div>
    </>
  );
};

export default Home;
