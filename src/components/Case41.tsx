import { AddReaction } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

export default function Case41() {
  return (
    <Typography sx={{ mt: 6, mb: 3, color: "text.secondary" }}>
      <AddReaction
        sx={{ mr: 1, verticalAlign: "middle", color: "secondary.main" }}
      />
      Case 41
    </Typography>
  );
}