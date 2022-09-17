import "./App.css";
import { createTheme } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";
import { ThemeProvider } from "@emotion/react";
import Home from "./pages/Home";

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
