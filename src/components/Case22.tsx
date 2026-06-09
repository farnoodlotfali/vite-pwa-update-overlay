import { Add } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

export default function Case22() {
  return (
    <Typography sx={{ mt: 6, mb: 3, color: "text.secondary" }}>
      <Add
        sx={{ mr: 1, verticalAlign: "middle", color: "secondary.main" }}
      />
      Case 22
    </Typography>
  );
}