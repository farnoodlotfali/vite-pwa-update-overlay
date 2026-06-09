import { AddToDrive } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

export default function Case45() {
  return (
    <Typography sx={{ mt: 6, mb: 3, color: "text.secondary" }}>
      <AddToDrive
        sx={{ mr: 1, verticalAlign: "middle", color: "secondary.main" }}
      />
      Case 45
    </Typography>
  );
}