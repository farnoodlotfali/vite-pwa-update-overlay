import { AddBusiness } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

export default function Case27() {
  return (
    <Typography sx={{ mt: 6, mb: 3, color: "text.secondary" }}>
      <AddBusiness
        sx={{ mr: 1, verticalAlign: "middle", color: "secondary.main" }}
      />
      Case 27
    </Typography>
  );
}