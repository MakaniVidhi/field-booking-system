import React from "react";
import { AppBar, Toolbar, Tabs, Tab, Stack } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import logo from "../../assets/FBS_Logo.png";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <React.Fragment>
      <AppBar sx={{ background: "white" }}>
        <Toolbar>
          <Stack
            direction="row"
            spacing={10}
            alignItems="center"
            sx={{ flexGrow: 1 }}
          >
            {/* Logo */}
            <img src={logo} alt="Logo" style={{ height: 70 }} />

            {/* Placeholder for Equal Spacing */}
            <div style={{ flex: 1 }} />

            {/* Tabs Positioned Right */}
            <Tabs
              sx={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Tab label="Fields" component={Link} to="/fields" />
              <Tab label="Blog" component={Link} to="/blogs"/>
              <Tab label="ContactUs" component={Link} to="/contactus"/>
              <Tab label="Login/SignUp" component={Link} to="/fields"/>
            </Tabs>
          </Stack>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Navbar;
