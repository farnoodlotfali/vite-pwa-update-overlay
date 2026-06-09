import { Airplay } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

export default function Case69() {
  return (
    <Typography sx={{ mt: 6, mb: 3, color: "text.secondary" }}>
      <Airplay
        sx={{ mr: 1, verticalAlign: "middle", color: "secondary.main" }}
      />
      Case 69
    </Typography>
  );
}