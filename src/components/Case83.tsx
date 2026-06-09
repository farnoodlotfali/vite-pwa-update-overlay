import { AllInclusive } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

export default function Case83() {
  return (
    <Typography sx={{ mt: 6, mb: 3, color: "text.secondary" }}>
      <AllInclusive
        sx={{ mr: 1, verticalAlign: "middle", color: "secondary.main" }}
      />
      Case 83
    </Typography>
  );
}