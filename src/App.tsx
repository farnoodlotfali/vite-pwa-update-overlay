import "./App.css";

import logo from "./assets/logo.png";
import { Box, Button, Divider, Paper, Stack } from "@mui/material";
import { useAppModeStore } from "./context/app-mode";
import { useShallow } from "zustand/shallow";
import HeadTitle from "./components/HeadTitle";
import Case from "./components/Case";

import HeavyUpdateCases from "./components/HeavyUpdateCases";
import { heavyIconNames } from "./constants/heavyIconNames";

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
          <HeadTitle />
          <Box
            sx={{
              height: 200,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img src={logo} height="100%" className="framework" alt="logo" />
          </Box>

          <Button onClick={toggleMode} variant="contained">
            Toggle mode
          </Button>

          {heavyIconNames.map((name, i) => {
            return <Case name={name} index={i + 1} key={i} />;
          })}

          <HeavyUpdateCases />
        </Stack>
      </Paper>
    </Box>
  );
}

export default App;
