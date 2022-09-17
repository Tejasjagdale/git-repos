import React, { useEffect, useRef, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import BIRDS from "vanta/dist/vanta.waves.min";
import { purple } from "@mui/material/colors";

const primary = purple[500]; // #f44336

export default function Error404() {
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
    <Box
      ref={myRef}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: primary,
      }}
    >
      <Typography variant="h1" style={{ color: "white" }}>
        404
      </Typography>
      <Typography variant="h6" style={{ color: "white" }}>
        The page you’re looking for doesn’t exist.
      </Typography>
      <Button sx={{bgcolor:"black",color:"white"}} >Back Home</Button>
    </Box>
  );
}
