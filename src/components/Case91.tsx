import { Announcement } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

export default function Case91() {
  return (
    <Typography sx={{ mt: 6, mb: 3, color: "text.secondary" }}>
      <Announcement
        sx={{ mr: 1, verticalAlign: "middle", color: "secondary.main" }}
      />
      Case 91
    </Typography>
  );
}