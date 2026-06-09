import { AirlineSeatLegroomNormal } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

export default function Case61() {
  return (
    <Typography sx={{ mt: 6, mb: 3, color: "text.secondary" }}>
      <AirlineSeatLegroomNormal
        sx={{ mr: 1, verticalAlign: "middle", color: "secondary.main" }}
      />
      Case 61
    </Typography>
  );
}