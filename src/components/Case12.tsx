import { AccessibleForward } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

export default function Case12() {
  return (
    <Typography sx={{ mt: 6, mb: 3, color: "text.secondary" }}>
      <AccessibleForward
        sx={{ mr: 1, verticalAlign: "middle", color: "secondary.main" }}
      />
      Case 12
    </Typography>
  );
}