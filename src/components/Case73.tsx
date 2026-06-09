import { AlarmOff } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

export default function Case73() {
  return (
    <Typography sx={{ mt: 6, mb: 3, color: "text.secondary" }}>
      <AlarmOff
        sx={{ mr: 1, verticalAlign: "middle", color: "secondary.main" }}
      />
      Case 73
    </Typography>
  );
}