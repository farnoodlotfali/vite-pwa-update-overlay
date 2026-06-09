import { AccessTime } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

export default function Case13() {
  return (
    <Typography sx={{ mt: 6, mb: 3, color: "text.secondary" }}>
      <AccessTime
        sx={{ mr: 1, verticalAlign: "middle", color: "secondary.main" }}
      />
      Case 13
    </Typography>
  );
}