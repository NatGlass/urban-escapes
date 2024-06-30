import { Drawer, Typography } from "@mui/material";

type MobileNavDrawerProps = {
  open: boolean;
  handleDrawerToggle: () => void;
};

function MobileNavDrawer({ open, handleDrawerToggle }: MobileNavDrawerProps) {
  return (
    <nav>
      <Drawer
        variant="temporary"
        open={open}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 260 },
        }}
      >
        <Typography
          variant="h6"
          component="a"
          href="/"
          sx={{
            fontWeight: 900,
            letterSpacing: ".35rem",
            color: "inherit",
            textDecoration: "none",
            padding: "1rem",
            height: 56,
            borderBottom: 1,
            borderColor: "divider",
          }}
        >
          Urban Escape
        </Typography>
      </Drawer>
    </nav>
  );
}

export default MobileNavDrawer;
