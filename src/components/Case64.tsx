import { AirlineSeatReclineNormal } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

export default function Case64() {
  return (
    <Typography sx={{ mt: 6, mb: 3, color: "text.secondary" }}>
      <AirlineSeatReclineNormal
        sx={{ mr: 1, verticalAlign: "middle", color: "secondary.main" }}
      />
      Case 64
    </Typography>
  );
}