import { Abc } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

export default function Case6() {
  return (
    <Typography sx={{ mt: 6, mb: 3, color: "text.secondary" }}>
      <Abc
        sx={{ mr: 1, verticalAlign: "middle", color: "secondary.main" }}
      />
      Case 6
    </Typography>
  );
}