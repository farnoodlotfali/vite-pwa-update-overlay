import { Person2Outlined } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

export default function Case1() {
  return (
    <Typography sx={{ mt: 6, mb: 3, color: "text.secondary" }}>
      <Person2Outlined
        sx={{ mr: 1, verticalAlign: "middle", color: "secondary.main" }}
      />
      Case 1
    </Typography>
  );
}