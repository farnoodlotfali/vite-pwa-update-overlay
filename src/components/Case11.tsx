import { Accessible } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

export default function Case11() {
  return (
    <Typography sx={{ mt: 6, mb: 3, color: "text.secondary" }}>
      <Accessible
        sx={{ mr: 1, verticalAlign: "middle", color: "secondary.main" }}
      />
      Case 11
    </Typography>
  );
}