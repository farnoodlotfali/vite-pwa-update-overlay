import { AppSettingsAlt } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

export default function Case100() {
  return (
    <Typography sx={{ mt: 6, mb: 3, color: "text.secondary" }}>
      <AppSettingsAlt
        sx={{ mr: 1, verticalAlign: "middle", color: "secondary.main" }}
      />
      Case 100
    </Typography>
  );
}