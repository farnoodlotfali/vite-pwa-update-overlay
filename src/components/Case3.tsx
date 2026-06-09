import { SearchOffTwoTone } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

export default function Case3() {
  return (
    <Typography sx={{ mt: 6, mb: 3, color: "text.secondary" }}>
      <SearchOffTwoTone
        sx={{ mr: 1, verticalAlign: "middle", color: "secondary.main" }}
      />
      Case 3
    </Typography>
  );
}