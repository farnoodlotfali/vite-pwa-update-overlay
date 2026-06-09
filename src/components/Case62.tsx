import { AirlineSeatLegroomReduced } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

export default function Case62() {
  return (
    <Typography sx={{ mt: 6, mb: 3, color: "text.secondary" }}>
      <AirlineSeatLegroomReduced
        sx={{ mr: 1, verticalAlign: "middle", color: "secondary.main" }}
      />
      Case 62
    </Typography>
  );
}