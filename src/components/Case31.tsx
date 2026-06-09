import { AddCircle } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

export default function Case31() {
  return (
    <Typography sx={{ mt: 6, mb: 3, color: "text.secondary" }}>
      <AddCircle
        sx={{ mr: 1, verticalAlign: "middle", color: "secondary.main" }}
      />
      Case 31
    </Typography>
  );
}