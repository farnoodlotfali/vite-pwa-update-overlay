import { AppBlocking } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

export default function Case95() {
  return (
    <Typography sx={{ mt: 6, mb: 3, color: "text.secondary" }}>
      <AppBlocking
        sx={{ mr: 1, verticalAlign: "middle", color: "secondary.main" }}
      />
      Case 95
    </Typography>
  );
}