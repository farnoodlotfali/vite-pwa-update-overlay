import { AddToPhotos } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

export default function Case47() {
  return (
    <Typography sx={{ mt: 6, mb: 3, color: "text.secondary" }}>
      <AddToPhotos
        sx={{ mr: 1, verticalAlign: "middle", color: "secondary.main" }}
      />
      Case 47
    </Typography>
  );
}