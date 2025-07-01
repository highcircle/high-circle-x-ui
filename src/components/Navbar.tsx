import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import { Menu as MenuIcon } from "lucide-react";
import { useModalStore } from "../store/modalStore";
import Button from "./ui/button";
import HCXLOGO from "../assets/hcx_logo.svg";

const navItems = ["Home", "About", "Listings", "FAQs", "Blogs"];

const Navbar: React.FC = () => {
  const { openJoinWaitlist } = useModalStore();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        background: "rgba(0, 0, 0, 0.8)",
        backdropFilter: "blur(10px)",
        boxShadow: "0 2px 20px rgba(0, 0, 0, 0.3)",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", px: { xs: 2, md: 4 } }}>
        {/* Logo */}
        <Box>
          <img
            src={HCXLOGO}
            alt="High Circle X"
            style={{ height: "40px", width: "auto" }}
          />
        </Box>

        {/* Desktop Navigation */}
        {!isMobile && (
          <Box sx={{ display: "flex", gap: 4 }}>
            {navItems.map((item) => (
              <Typography
                key={item}
                sx={{
                  color: "white",
                  cursor: "pointer",
                  fontWeight: 500,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    color: "#667eea",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                {item}
              </Typography>
            ))}
          </Box>
        )}

        {/* Desktop Auth Buttons */}
        {!isMobile && (
          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <Button onClick={openJoinWaitlist} buttonType="outline">
              Join Waitlist
            </Button>
          </Box>
        )}

        {/* Mobile Menu */}
        {isMobile && (
          <>
            <IconButton edge="end" color="inherit" onClick={handleMenuOpen}>
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              PaperProps={{
                sx: {
                  background: "rgba(0, 0, 0, 0.9)",
                  backdropFilter: "blur(10px)",
                  color: "white",
                  minWidth: 200,
                },
              }}
            >
              {navItems.map((item) => (
                <MenuItem key={item} onClick={handleMenuClose}>
                  {item}
                </MenuItem>
              ))}
              <MenuItem
                onClick={() => {
                  handleMenuClose();
                  openJoinWaitlist();
                }}
              >
                Join Waitlist
              </MenuItem>
            </Menu>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
