import { Apple } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

export default function Case96() {
  return (
    <Typography sx={{ mt: 6, mb: 3, color: "text.secondary" }}>
      <Apple
        sx={{ mr: 1, verticalAlign: "middle", color: "secondary.main" }}
      />
      Case 96
    </Typography>
  );
}