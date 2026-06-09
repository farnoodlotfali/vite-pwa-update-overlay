import { AddModerator } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

export default function Case39() {
  return (
    <Typography sx={{ mt: 6, mb: 3, color: "text.secondary" }}>
      <AddModerator
        sx={{ mr: 1, verticalAlign: "middle", color: "secondary.main" }}
      />
      Case 39
    </Typography>
  );
}