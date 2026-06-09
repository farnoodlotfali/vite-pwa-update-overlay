import { Adjust } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

export default function Case50() {
  return (
    <Typography sx={{ mt: 6, mb: 3, color: "text.secondary" }}>
      <Adjust
        sx={{ mr: 1, verticalAlign: "middle", color: "secondary.main" }}
      />
      Case 50
    </Typography>
  );
}