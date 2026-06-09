import { AirlineSeatFlatAngled } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

export default function Case58() {
  return (
    <Typography sx={{ mt: 6, mb: 3, color: "text.secondary" }}>
      <AirlineSeatFlatAngled
        sx={{ mr: 1, verticalAlign: "middle", color: "secondary.main" }}
      />
      Case 58
    </Typography>
  );
}