import { AddToHomeScreen } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

export default function Case46() {
  return (
    <Typography sx={{ mt: 6, mb: 3, color: "text.secondary" }}>
      <AddToHomeScreen
        sx={{ mr: 1, verticalAlign: "middle", color: "secondary.main" }}
      />
      Case 46
    </Typography>
  );
}