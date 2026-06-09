import { AirportShuttle } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

export default function Case70() {
  return (
    <Typography sx={{ mt: 6, mb: 3, color: "text.secondary" }}>
      <AirportShuttle
        sx={{ mr: 1, verticalAlign: "middle", color: "secondary.main" }}
      />
      Case 70
    </Typography>
  );
}