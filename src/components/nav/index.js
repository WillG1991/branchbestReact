import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';

function NavbarLanding(props) {
    const { currentPage, handlePageChange } = props;
  
    return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            My Company
          </Typography>
          <Button color="inherit" onClick={() => handlePageChange("Home")}>
            Home
          </Button>
          <Button color="inherit" onClick={() => handlePageChange("About")}>
            About Us
          </Button>
          <Button color="inherit" onClick={() => handlePageChange("Catering")}>
            Catering
          </Button>
          <Button color="inherit" onClick={() => handlePageChange("Contact")}>
            Contact Us
          </Button>
          <Button color="inherit" onClick={() => handlePageChange("Gallery")}>
            Gallery
          </Button>
          <Button color="inherit" onClick={() => handlePageChange("Reviews")}>
            Reviews
          </Button>
        </Toolbar>
      </AppBar>
    );
  }

export default NavbarLanding;