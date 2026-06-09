import { Adb } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

export default function Case21() {
  return (
    <Typography sx={{ mt: 6, mb: 3, color: "text.secondary" }}>
      <Adb
        sx={{ mr: 1, verticalAlign: "middle", color: "secondary.main" }}
      />
      Case 21
    </Typography>
  );
}