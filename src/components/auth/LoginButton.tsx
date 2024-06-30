import { Button } from "@mui/material";
import { signIn } from "next-auth/react";

function LoginButton() {
  return (
    <Button type="submit" onClick={() => signIn()} color="inherit">
      Login
    </Button>
  );
}

export default LoginButton;
