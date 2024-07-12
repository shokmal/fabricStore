import * as React from "react";
import { Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#5dc416",
      contrastText: "#fff",
      disableElevation: true,
    },
  },
});

export default function MainButton({ tytle, onClick }) {
  return (
    <ThemeProvider theme={theme}>
      <Button
        onClick={onClick}
        variant="contained"
        color="primary"
        disableElevation={true}
      >
        {tytle}
      </Button>
    </ThemeProvider>
  );
}
