import { Button } from "@mui/material";
import { signOut } from "next-auth/react";

function LogoutButton() {
  return (
    <Button onClick={() => signOut()} color="inherit">
      Logout
    </Button>
  );
}

export default LogoutButton;
