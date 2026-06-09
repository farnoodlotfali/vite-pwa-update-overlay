import { AddShoppingCart } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

export default function Case43() {
  return (
    <Typography sx={{ mt: 6, mb: 3, color: "text.secondary" }}>
      <AddShoppingCart
        sx={{ mr: 1, verticalAlign: "middle", color: "secondary.main" }}
      />
      Case 43
    </Typography>
  );
}