import { AddTask } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

export default function Case44() {
  return (
    <Typography sx={{ mt: 6, mb: 3, color: "text.secondary" }}>
      <AddTask
        sx={{ mr: 1, verticalAlign: "middle", color: "secondary.main" }}
      />
      Case 44
    </Typography>
  );
}