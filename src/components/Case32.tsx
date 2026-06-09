import { AddComment } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

export default function Case32() {
  return (
    <Typography sx={{ mt: 6, mb: 3, color: "text.secondary" }}>
      <AddComment
        sx={{ mr: 1, verticalAlign: "middle", color: "secondary.main" }}
      />
      Case 32
    </Typography>
  );
}