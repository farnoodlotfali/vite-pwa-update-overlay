import { AirlineStops } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

export default function Case65() {
  return (
    <Typography sx={{ mt: 6, mb: 3, color: "text.secondary" }}>
      <AirlineStops
        sx={{ mr: 1, verticalAlign: "middle", color: "secondary.main" }}
      />
      Case 65
    </Typography>
  );
}