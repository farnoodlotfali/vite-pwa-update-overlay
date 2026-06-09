import { Apps } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

export default function Case99() {
  return (
    <Typography sx={{ mt: 6, mb: 3, color: "text.secondary" }}>
      <Apps
        sx={{ mr: 1, verticalAlign: "middle", color: "secondary.main" }}
      />
      Case 99
    </Typography>
  );
}