import { AlignVerticalCenter } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

export default function Case80() {
  return (
    <Typography sx={{ mt: 6, mb: 3, color: "text.secondary" }}>
      <AlignVerticalCenter
        sx={{ mr: 1, verticalAlign: "middle", color: "secondary.main" }}
      />
      Case 80
    </Typography>
  );
}