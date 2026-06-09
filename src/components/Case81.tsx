import { AlignVerticalTop } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

export default function Case81() {
  return (
    <Typography sx={{ mt: 6, mb: 3, color: "text.secondary" }}>
      <AlignVerticalTop
        sx={{ mr: 1, verticalAlign: "middle", color: "secondary.main" }}
      />
      Case 81
    </Typography>
  );
}