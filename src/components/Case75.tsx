import { Album } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

export default function Case75() {
  return (
    <Typography sx={{ mt: 6, mb: 3, color: "text.secondary" }}>
      <Album
        sx={{ mr: 1, verticalAlign: "middle", color: "secondary.main" }}
      />
      Case 75
    </Typography>
  );
}