import "./App.css";

import logo from "./assets/logo.png";
import { Box, Button, Divider, Paper, Stack } from "@mui/material";
import { useAppModeStore } from "./context/app-mode";
import { useShallow } from "zustand/shallow";
import HeadTitle from "./components/HeadTitle";
import Case1 from "./components/Case1";
import Case2 from "./components/Case2";
import Case3 from "./components/Case3";
import Case4 from "./components/Case4";
import Case5 from "./components/Case5";
import Case6 from "./components/Case6";
import Case7 from "./components/Case7";
import Case8 from "./components/Case8";
import Case9 from "./components/Case9";
import Case10 from "./components/Case10";
import Case11 from "./components/Case11";
import Case12 from "./components/Case12";
import Case13 from "./components/Case13";
import Case14 from "./components/Case14";
import Case15 from "./components/Case15";
import Case16 from "./components/Case16";
import Case17 from "./components/Case17";
import Case18 from "./components/Case18";
import Case19 from "./components/Case19";
import Case20 from "./components/Case20";
import Case21 from "./components/Case21";
import Case22 from "./components/Case22";
import Case23 from "./components/Case23";
import Case24 from "./components/Case24";
import Case25 from "./components/Case25";
import Case26 from "./components/Case26";
import Case27 from "./components/Case27";
import Case28 from "./components/Case28";
import Case29 from "./components/Case29";
import Case30 from "./components/Case30";
import Case31 from "./components/Case31";
import Case32 from "./components/Case32";
import Case33 from "./components/Case33";
import Case34 from "./components/Case34";
import Case35 from "./components/Case35";
import Case36 from "./components/Case36";
import Case37 from "./components/Case37";
import Case38 from "./components/Case38";
import Case39 from "./components/Case39";
import Case40 from "./components/Case40";
import Case41 from "./components/Case41";
import Case42 from "./components/Case42";
import Case43 from "./components/Case43";
import Case44 from "./components/Case44";
import Case45 from "./components/Case45";
import Case46 from "./components/Case46";
import Case47 from "./components/Case47";
import Case48 from "./components/Case48";
import Case49 from "./components/Case49";
import Case50 from "./components/Case50";
import Case51 from "./components/Case51";
import Case52 from "./components/Case52";
import Case53 from "./components/Case53";
import Case54 from "./components/Case54";
import Case55 from "./components/Case55";
import Case56 from "./components/Case56";
import Case57 from "./components/Case57";
import Case58 from "./components/Case58";
import Case59 from "./components/Case59";
import Case60 from "./components/Case60";
import Case61 from "./components/Case61";
import Case62 from "./components/Case62";
import Case63 from "./components/Case63";
import Case64 from "./components/Case64";
import Case65 from "./components/Case65";
import Case66 from "./components/Case66";
import Case67 from "./components/Case67";
import Case68 from "./components/Case68";
import Case69 from "./components/Case69";
import Case70 from "./components/Case70";
import Case71 from "./components/Case71";
import Case72 from "./components/Case72";
import Case73 from "./components/Case73";
import Case74 from "./components/Case74";
import Case75 from "./components/Case75";
import Case76 from "./components/Case76";
import Case77 from "./components/Case77";
import Case78 from "./components/Case78";
import Case79 from "./components/Case79";
import Case80 from "./components/Case80";
import Case81 from "./components/Case81";
import Case82 from "./components/Case82";
import Case83 from "./components/Case83";
import Case84 from "./components/Case84";
import Case85 from "./components/Case85";
import Case86 from "./components/Case86";
import Case87 from "./components/Case87";
import Case88 from "./components/Case88";
import Case89 from "./components/Case89";
import Case90 from "./components/Case90";
import Case91 from "./components/Case91";
import Case92 from "./components/Case92";
import Case93 from "./components/Case93";
import Case94 from "./components/Case94";
import Case95 from "./components/Case95";
import Case96 from "./components/Case96";
import Case97 from "./components/Case97";
import Case98 from "./components/Case98";
import Case99 from "./components/Case99";
import Case100 from "./components/Case100";
import HeavyUpdateCases from "./components/HeavyUpdateCases";

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

          <Case1 />
          <Case2 />
          <Case3 />
          <Case4 />
          <Case5 />
          <Case6 />
          <Case7 />
          <Case8 />
          <Case9 />
          <Case10 />
          <Case11 />
          <Case12 />
          <Case13 />
          <Case14 />
          <Case15 />
          <Case16 />
          <Case17 />
          <Case18 />
          <Case19 />
          <Case20 />
          <Case21 />
          <Case22 />
          <Case23 />
          <Case24 />
          <Case25 />
          <Case26 />
          <Case27 />
          <Case28 />
          <Case29 />
          <Case30 />
          <Case31 />
          <Case32 />
          <Case33 />
          <Case34 />
          <Case35 />
          <Case36 />
          <Case37 />
          <Case38 />
          <Case39 />
          <Case40 />
          <Case41 />
          <Case42 />
          <Case43 />
          <Case44 />
          <Case45 />
          <Case46 />
          <Case47 />
          <Case48 />
          <Case49 />
          <Case50 />
          <Case51 />
          <Case52 />
          <Case53 />
          <Case54 />
          <Case55 />
          <Case56 />
          <Case57 />
          <Case58 />
          <Case59 />
          <Case60 />
          <Case61 />
          <Case62 />
          <Case63 />
          <Case64 />
          <Case65 />
          <Case66 />
          <Case67 />
          <Case68 />
          <Case69 />
          <Case70 />
          <Case71 />
          <Case72 />
          <Case73 />
          <Case74 />
          <Case75 />
          <Case76 />
          <Case77 />
          <Case78 />
          <Case79 />
          <Case80 />
          <Case81 />
          <Case82 />
          <Case83 />
          <Case84 />
          <Case85 />
          <Case86 />
          <Case87 />
          <Case88 />
          <Case89 />
          <Case90 />
          <Case91 />
          <Case92 />
          <Case93 />
          <Case94 />
          <Case95 />
          <Case96 />
          <Case97 />
          <Case98 />
          <Case99 />
          <Case100 />
          <HeavyUpdateCases />
        </Stack>
      </Paper>
    </Box>
  );
}

export default App;
