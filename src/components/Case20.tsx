import { AcUnit } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

export default function Case20() {
  return (
    <Typography sx={{ mt: 6, mb: 3, color: "text.secondary" }}>
      <AcUnit
        sx={{ mr: 1, verticalAlign: "middle", color: "secondary.main" }}
      />
      Case 20
    </Typography>
  );
}