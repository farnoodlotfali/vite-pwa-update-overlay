import { AlarmOn } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

export default function Case74() {
  return (
    <Typography sx={{ mt: 6, mb: 3, color: "text.secondary" }}>
      <AlarmOn
        sx={{ mr: 1, verticalAlign: "middle", color: "secondary.main" }}
      />
      Case 74
    </Typography>
  );
}