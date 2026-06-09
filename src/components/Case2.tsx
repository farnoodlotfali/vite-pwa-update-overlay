import { TaxiAlert } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

export default function Case2() {
  return (
    <Typography sx={{ mt: 6, mb: 3, color: "text.secondary" }}>
      <TaxiAlert
        sx={{ mr: 1, verticalAlign: "middle", color: "secondary.main" }}
      />
      Case 2
    </Typography>
  );
}