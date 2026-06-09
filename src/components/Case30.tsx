import { Addchart } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

export default function Case30() {
  return (
    <Typography sx={{ mt: 6, mb: 3, color: "text.secondary" }}>
      <Addchart
        sx={{ mr: 1, verticalAlign: "middle", color: "secondary.main" }}
      />
      Case 30
    </Typography>
  );
}