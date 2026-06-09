import { Accessibility } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

export default function Case9() {
  return (
    <Typography sx={{ mt: 6, mb: 3, color: "text.secondary" }}>
      <Accessibility
        sx={{ mr: 1, verticalAlign: "middle", color: "secondary.main" }}
      />
      Case 9
    </Typography>
  );
}