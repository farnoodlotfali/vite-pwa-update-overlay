import { AccountCircle } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

export default function Case18() {
  return (
    <Typography sx={{ mt: 6, mb: 3, color: "text.secondary" }}>
      <AccountCircle
        sx={{ mr: 1, verticalAlign: "middle", color: "secondary.main" }}
      />
      Case 18
    </Typography>
  );
}