import { Business } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

export default function Case5() {
  return (
    <Typography sx={{ mt: 6, mb: 3, color: "text.secondary" }}>
      <Business
        sx={{ mr: 1, verticalAlign: "middle", color: "secondary.main" }}
      />
      Case 5
    </Typography>
  );
}