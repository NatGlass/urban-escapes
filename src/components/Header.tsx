"use client";

import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import MobileNavDrawer from "./Drawer";

const navItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Stays",
    link: "/stays",
  },
];

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const session = useSession();

  const user = session.data?.user;

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <AppBar position="static" elevation={0} component="nav">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
          >
            <Box>
              <Typography
                variant="h6"
                component="a"
                href="/"
                sx={{
                  fontWeight: 900,
                  letterSpacing: ".35rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Urban Escape
              </Typography>
            </Box>
            <Box display={{ xs: "none", md: "block" }}>
              {navItems.map((item) => (
                <Button
                  disableRipple
                  key={item.name}
                  sx={{ color: "inherit", textTransform: "none" }}
                  size="large"
                >
                  {item.name}
                </Button>
              ))}
            </Box>
            {/* {isLoggedIn ? (
              <Button color="inherit" variant="outlined" />
            ) : (
              <Box>
                <ButtonGroup>
                  <Button color="inherit">Register</Button>
                  <Button color="inherit" component={Link} href="/login">
                    Login
                  </Button>
                </ButtonGroup>
              </Box>
            )} */}

            {user && <Button color="inherit">user {user.name}</Button>}
            {!user && session.status !== "loading" && (
              <Button component={Link} href="/api/auth/signin" color="inherit">
                Login
              </Button>
            )}

            <Box sx={{ display: { xs: "block", md: "none" } }}>
              <IconButton
                size="large"
                aria-controls="menu-appbar"
                aria-label="open navigation menu"
                color="inherit"
                edge="end"
                onClick={handleDrawerToggle}
              >
                <MenuIcon fontSize="medium" />
              </IconButton>
            </Box>
          </Box>
          <MobileNavDrawer
            open={mobileOpen}
            handleDrawerToggle={handleDrawerToggle}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
