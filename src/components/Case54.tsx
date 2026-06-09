import { Agriculture } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

export default function Case54() {
  return (
    <Typography sx={{ mt: 6, mb: 3, color: "text.secondary" }}>
      <Agriculture
        sx={{ mr: 1, verticalAlign: "middle", color: "secondary.main" }}
      />
      Case 54
    </Typography>
  );
}