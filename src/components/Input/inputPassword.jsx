import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { AccountCircle } from "@mui/icons-material";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";

export default function BasicPasswordFields({ placeholder, icon, type }) {
  return (
    <Box
      sx={{ width: 500, height: 100, display: "flex", alignItems: "flex-end" }}
    >
      <LockIcon
        sx={{ color: "action.active", mr: 2, my: 0.5 }}
        fontSize="large"
      />
      <TextField
        id="input-with-sx"
        label={placeholder}
        variant="standard"
        type="password"
        className="input-inside-width"
        // fullWidth
        size="large"
      />
    </Box>
  );
}
