import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';

function AppHeader() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Branchburg's Best
        </Typography>
        <IconButton onClick={handleMenuOpen} edge="end" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose} href="#services">Hours</MenuItem>
          <MenuItem onClick={handleMenuClose} href="#portfolio">Portfolio</MenuItem>
          <MenuItem onClick={handleMenuClose} href="https://branchburgsbest.square.site/s/order">Order</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default AppHeader;