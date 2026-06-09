import { Handshake } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

export default function HeadTitle() {
  return (
    <Typography sx={{ mt: 6, mb: 3, color: "text.secondary" }}>
      <Handshake
        sx={{ mr: 1, verticalAlign: "middle", color: "secondary.main" }}
      />
      {"Vite Pwa Update Overlay"}
    </Typography>
  );
}
