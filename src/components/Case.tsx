import Typography from "@mui/material/Typography";
import * as Icons from "@mui/icons-material";

export default function Case({ index, name }: { index: number; name: string }) {
  const Icon = Icons[name] ?? Icons.HelpOutlined;
  return (
    <Typography sx={{ mt: 6, mb: 3, color: "text.secondary" }}>
      <Icon sx={{ mr: 1, verticalAlign: "middle", color: "secondary.main" }} />
      Case {index}
    </Typography>
  );
}
