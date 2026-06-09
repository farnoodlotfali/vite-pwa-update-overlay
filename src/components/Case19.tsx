import { AccountTree } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

export default function Case19() {
  return (
    <Typography sx={{ mt: 6, mb: 3, color: "text.secondary" }}>
      <AccountTree
        sx={{ mr: 1, verticalAlign: "middle", color: "secondary.main" }}
      />
      Case 19
    </Typography>
  );
}