import { Airlines } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

export default function Case56() {
  return (
    <Typography sx={{ mt: 6, mb: 3, color: "text.secondary" }}>
      <Airlines
        sx={{ mr: 1, verticalAlign: "middle", color: "secondary.main" }}
      />
      Case 56
    </Typography>
  );
}