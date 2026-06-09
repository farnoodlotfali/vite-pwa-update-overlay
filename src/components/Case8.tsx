import { AccessAlarms } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

export default function Case8() {
  return (
    <Typography sx={{ mt: 6, mb: 3, color: "text.secondary" }}>
      <AccessAlarms
        sx={{ mr: 1, verticalAlign: "middle", color: "secondary.main" }}
      />
      Case 8
    </Typography>
  );
}