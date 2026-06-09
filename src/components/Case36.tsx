import { AddLink } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

export default function Case36() {
  return (
    <Typography sx={{ mt: 6, mb: 3, color: "text.secondary" }}>
      <AddLink
        sx={{ mr: 1, verticalAlign: "middle", color: "secondary.main" }}
      />
      Case 36
    </Typography>
  );
}