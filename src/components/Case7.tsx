import { AccessAlarm } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

export default function Case7() {
  return (
    <Typography sx={{ mt: 6, mb: 3, color: "text.secondary" }}>
      <AccessAlarm
        sx={{ mr: 1, verticalAlign: "middle", color: "secondary.main" }}
      />
      Case 7
    </Typography>
  );
}