import { AdminPanelSettings } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

export default function Case51() {
  return (
    <Typography sx={{ mt: 6, mb: 3, color: "text.secondary" }}>
      <AdminPanelSettings
        sx={{ mr: 1, verticalAlign: "middle", color: "secondary.main" }}
      />
      Case 51
    </Typography>
  );
}