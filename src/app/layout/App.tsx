import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import React, { useState } from "react";
import { Route } from "react-router-dom";
import Catalog from "../../features/catalog/Catalog";
import Header from "./Header";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? "dark" : "light";
  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === "light" ? "#eaeaea" : "#121212"
      },
    },
  });

  function handleThemeChange() {
    setDarkMode(!darkMode);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
      <Container>
        <Route path='/' exact component={} />
        <Route path='/catalog' exact component={} />
        <Route path='/catalog/:id' component={} />
        <Route path='/about' component={} />
        <Route path='/contact' component={} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
