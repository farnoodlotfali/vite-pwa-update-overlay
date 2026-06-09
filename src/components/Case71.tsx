import { Alarm } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

export default function Case71() {
  return (
    <Typography sx={{ mt: 6, mb: 3, color: "text.secondary" }}>
      <Alarm
        sx={{ mr: 1, verticalAlign: "middle", color: "secondary.main" }}
      />
      Case 71
    </Typography>
  );
}