import { AddAlert } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

export default function Case24() {
  return (
    <Typography sx={{ mt: 6, mb: 3, color: "text.secondary" }}>
      <AddAlert
        sx={{ mr: 1, verticalAlign: "middle", color: "secondary.main" }}
      />
      Case 24
    </Typography>
  );
}