import { AirlineSeatLegroomExtra } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

export default function Case60() {
  return (
    <Typography sx={{ mt: 6, mb: 3, color: "text.secondary" }}>
      <AirlineSeatLegroomExtra
        sx={{ mr: 1, verticalAlign: "middle", color: "secondary.main" }}
      />
      Case 60
    </Typography>
  );
}