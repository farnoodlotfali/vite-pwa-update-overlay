import { AddHome } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

export default function Case33() {
  return (
    <Typography sx={{ mt: 6, mb: 3, color: "text.secondary" }}>
      <AddHome
        sx={{ mr: 1, verticalAlign: "middle", color: "secondary.main" }}
      />
      Case 33
    </Typography>
  );
}