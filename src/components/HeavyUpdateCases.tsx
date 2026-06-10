import * as Icons from "@mui/icons-material";
import { Box, Paper, Stack, Typography } from "@mui/material";
import type { ElementType } from "react";
import { heavyIconNames } from "../constants/heavyIconNames";

const iconLibrary = Icons as Record<string, ElementType>;

const heavyCaseComponents = heavyIconNames.map((iconName, index) => {
  const Icon = iconLibrary[iconName] ?? Icons.HelpOutlined;
  const caseNumber = index + 101;

  function HeavyUpdateCase() {
    return (
      <Paper variant="outlined" sx={{ p: 2 }}>
        <Stack direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
          <Icon sx={{ color: "secondary.main" }} />
          <Typography sx={{ color: "text.secondary" }}>
            Stress case {caseNumber}: {iconName}
          </Typography>
        </Stack>
      </Paper>
    );
  }

  HeavyUpdateCase.displayName = `HeavyUpdateCase${caseNumber}`;
  return HeavyUpdateCase;
});

export default function HeavyUpdateCases() {
  return (
    <Box
      sx={{
        display: "grid",
        gap: 1.5,
        gridTemplateColumns: {
          xs: "1fr",
          sm: "repeat(2, minmax(0, 1fr))",
          lg: "repeat(3, minmax(0, 1fr))",
        },
      }}
    >
      {heavyCaseComponents.map((HeavyUpdateCase) => (
        <HeavyUpdateCase key={HeavyUpdateCase.displayName} />
      ))}
    </Box>
  );
}
