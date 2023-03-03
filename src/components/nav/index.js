import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';

function AppHeader() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBackground, setShowBackground] = useState(true);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setIsScrolled(true);
      setShowBackground(false);
    } else {
      setIsScrolled(false);
      setShowBackground(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowBackground(false);
    }, 5000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <AppBar position="fixed" style={{ backgroundColor: showBackground ? 'transparent' : 'white', boxShadow: 'none' }}>
      <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: isScrolled ? 'black' : 'white', fontFamily: 'Helvetica' }}>
  Branchburg's Best
</Typography>
        <IconButton onClick={handleMenuOpen} edge="end" color={isScrolled ? 'primary' : 'inherit'} aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          style={{ color: isScrolled ? 'black' : 'white' }}
        >
          <MenuItem onClick={handleMenuClose} href="#services" style={{ color: isScrolled ? 'black' : 'white' }}>Hours</MenuItem>
          <MenuItem onClick={handleMenuClose} href="#portfolio" style={{ color: isScrolled ? 'black' : 'white' }}>Portfolio</MenuItem>
          <MenuItem onClick={handleMenuClose} href="https://branchburgsbest.square.site/s/order" style={{ color: isScrolled ? 'black' : 'white' }}>Order</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default AppHeader;
