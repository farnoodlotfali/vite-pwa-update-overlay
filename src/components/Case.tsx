import Typography from "@mui/material/Typography";
import * as Icons from "@mui/icons-material";
import type { ElementType } from "react";

const iconLibrary = Icons as Record<string, ElementType>;

export default function Case({ index, name }: { index: number; name: string }) {
  const Icon = iconLibrary[name] ?? Icons.HelpOutlined;

  return (
    <Typography sx={{ mt: 6, mb: 3, color: "text.secondary" }}>
      <Icon sx={{ mr: 1, verticalAlign: "middle", color: "secondary.main" }} />
      Case {index}
    </Typography>
  );
}
