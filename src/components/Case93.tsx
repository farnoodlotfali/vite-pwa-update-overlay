import { Apartment } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

export default function Case93() {
  return (
    <Typography sx={{ mt: 6, mb: 3, color: "text.secondary" }}>
      <Apartment
        sx={{ mr: 1, verticalAlign: "middle", color: "secondary.main" }}
      />
      Case 93
    </Typography>
  );
}