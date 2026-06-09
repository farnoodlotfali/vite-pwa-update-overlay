import "./App.css";

import reactLogo from "./assets/react.svg";
import { Box, Button, Divider, Paper, Stack } from "@mui/material";
import { useAppModeStore } from "./context/app-mode";
import { useShallow } from "zustand/shallow";

function App() {
  const { toggleMode } = useAppModeStore(useShallow((state) => state));

  return (
    <Box
      sx={{
        p: 5,
      }}
    >
      <Paper
        variant="outlined"
        sx={{
          p: 4,
        }}
      >
        <Stack spacing={5} divider={<Divider />}>
          <Box
            sx={{
              height: 200,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src={reactLogo}
              height="100%"
              className="framework"
              alt="React logo"
            />
          </Box>

          <Button onClick={toggleMode} variant="contained" color="secondary">
            Toggle mode
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
}

export default App;
