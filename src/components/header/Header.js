import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import React, { useState } from "react";

import "./Header.scss";

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div className="container">
      <AppBar position="static" sx={{ bgcolor: "white" }}>
        <Container maxWidth="xl" className="header">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              className="header__logo"
            >
              JWTJob
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <div className="header__menu">
                <div className="header__menu-item">
                  <p onMouseEnter={handleOpenUserMenu}>Thuê Freelancer</p>
                  <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
                  <ArrowDropDownIcon className="header__menu-itemIcon" />
                </div>
                <div className="header__menu-item">
                  <p className="a">Tìm việc làm</p>
                  <ArrowDropDownIcon className="header__menu-itemIcon" />
                </div>
              </div>
            </Box>

            <Box sx={{ flexGrow: 0, display: { xs: "flex" } }}>
              <Box
                sx={{
                  flexGrow: 0,
                  display: { xs: "none", md: "flex" },
                  color: "black",
                }}
              >
                <div>
                  <p>abc</p>
                </div>
              </Box>
              <IconButton sx={{ p: 0 }}>
                <Avatar
                  alt="Remy Sharp"
                  src="https://upload.wikimedia.org/wikipedia/en/8/86/Avatar_Aang.png"
                />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <div className="dropdown">
        <p>A</p>
      </div>
    </div>
  );
};

export default Header;
