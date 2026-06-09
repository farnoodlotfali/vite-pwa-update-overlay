import { AccountBox } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

export default function Case17() {
  return (
    <Typography sx={{ mt: 6, mb: 3, color: "text.secondary" }}>
      <AccountBox
        sx={{ mr: 1, verticalAlign: "middle", color: "secondary.main" }}
      />
      Case 17
    </Typography>
  );
}