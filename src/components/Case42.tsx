import { AddRoad } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

export default function Case42() {
  return (
    <Typography sx={{ mt: 6, mb: 3, color: "text.secondary" }}>
      <AddRoad
        sx={{ mr: 1, verticalAlign: "middle", color: "secondary.main" }}
      />
      Case 42
    </Typography>
  );
}