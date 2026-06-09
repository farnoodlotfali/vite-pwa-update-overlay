import { AddLocationAlt } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

export default function Case38() {
  return (
    <Typography sx={{ mt: 6, mb: 3, color: "text.secondary" }}>
      <AddLocationAlt
        sx={{ mr: 1, verticalAlign: "middle", color: "secondary.main" }}
      />
      Case 38
    </Typography>
  );
}