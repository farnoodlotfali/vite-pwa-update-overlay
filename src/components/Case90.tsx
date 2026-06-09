import { Animation } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

export default function Case90() {
  return (
    <Typography sx={{ mt: 6, mb: 3, color: "text.secondary" }}>
      <Animation
        sx={{ mr: 1, verticalAlign: "middle", color: "secondary.main" }}
      />
      Case 90
    </Typography>
  );
}