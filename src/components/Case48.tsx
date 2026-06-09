import { AddToQueue } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

export default function Case48() {
  return (
    <Typography sx={{ mt: 6, mb: 3, color: "text.secondary" }}>
      <AddToQueue
        sx={{ mr: 1, verticalAlign: "middle", color: "secondary.main" }}
      />
      Case 48
    </Typography>
  );
}