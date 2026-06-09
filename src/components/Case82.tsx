import { AllInbox } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

export default function Case82() {
  return (
    <Typography sx={{ mt: 6, mb: 3, color: "text.secondary" }}>
      <AllInbox
        sx={{ mr: 1, verticalAlign: "middle", color: "secondary.main" }}
      />
      Case 82
    </Typography>
  );
}