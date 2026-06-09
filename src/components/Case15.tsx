import { AccountBalance } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

export default function Case15() {
  return (
    <Typography sx={{ mt: 6, mb: 3, color: "text.secondary" }}>
      <AccountBalance
        sx={{ mr: 1, verticalAlign: "middle", color: "secondary.main" }}
      />
      Case 15
    </Typography>
  );
}