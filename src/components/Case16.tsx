import { AccountBalanceWallet } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

export default function Case16() {
  return (
    <Typography sx={{ mt: 6, mb: 3, color: "text.secondary" }}>
      <AccountBalanceWallet
        sx={{ mr: 1, verticalAlign: "middle", color: "secondary.main" }}
      />
      Case 16
    </Typography>
  );
}