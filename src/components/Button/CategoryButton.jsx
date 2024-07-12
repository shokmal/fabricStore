import * as React from "react";
import { Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import shadows from "@mui/material/styles/shadows";
import { Data } from "../Data";

const theme = createTheme({
  palette: {
    primary: {
      main: "#eff1f6",
      contrastText: "#1d2230",
      disableElevation: true,
    },
  },
});

export default function CategoryButton({ menuItems, fileterItems, setItems }) {
  return (
    <ThemeProvider theme={theme}>
      {menuItems.map((val) => (
        <Button
          onClick={() => fileterItems(val)}
          variant="contained"
          color="primary"
          disableElevation={true}
        >
          {val}
        </Button>
      ))}
      <Button
        onClick={() => setItems(Data)}
        variant="contained"
        color="primary"
        disableElevation={true}
      >
        All
      </Button>
    </ThemeProvider>
  );
}
