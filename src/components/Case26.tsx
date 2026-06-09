import { AddBox } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

export default function Case26() {
  return (
    <Typography sx={{ mt: 6, mb: 3, color: "text.secondary" }}>
      <AddBox
        sx={{ mr: 1, verticalAlign: "middle", color: "secondary.main" }}
      />
      Case 26
    </Typography>
  );
}