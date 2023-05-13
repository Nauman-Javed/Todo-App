import {
  AppBar,
  Box,
  Container,
  Menu,
  MenuItem,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [link, setLink] = useState("Todos");

  const StyledToolbar = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  });

  return (
    <Container maxWidth={"lg"} sx={{ padding: "19px" }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "rgba(144, 178, 249)",
          padding: "8px",
          borderRadius: "7px",
        }}
      >
        <StyledToolbar>
          <Typography
            variant="h4"
            component="div"
            sx={{
              color: "rgba(17, 23, 94)",
              fontWeight: "bold",
              display: { xs: "none", md: "block" },
            }}
          >
            Task.io
          </Typography>
          <MenuIcon
            sx={{
              color: "rgba(17, 23, 94)",
              display: { xs: "block", md: "none" },
              fontSize: "30px",
            }}
            onClick={(e) => {
              setOpen(true);
            }}
          />

          <Box
            sx={{
              color: "rgba(17, 23, 94)",
              display: { xs: "none", md: "block" },
            }}
          >
            <Stack direction="row" spacing={4}>
              <NavLink to="/" style={{ textDecorationLine: "none" }}>
                <Typography
                  variant="h6"
                  onClick={() => setLink("Todos")}
                  sx={{
                    color: link === "Todos" ? "rgba(17, 23, 94)" : "primary",
                    fontWeight: link === "Todos" ? "bold" : "light",
                  }}
                >
                  Todos
                </Typography>
              </NavLink>
              <NavLink to="important" style={{ textDecorationLine: "none" }}>
                <Typography
                  variant="h6"
                  onClick={() => setLink("Importants")}
                  sx={{
                    color:
                      link === "Importants" ? "rgba(17, 23, 94)" : "primary",
                    fontWeight: link === "Importants" ? "bold" : "light",
                  }}
                >
                  Importants
                </Typography>
              </NavLink>
            </Stack>
          </Box>
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <Typography
              variant="h4"
              component="div"
              sx={{
                color: "rgba(17, 23, 94)",
                fontWeight: "bold",
              }}
            >
              Task.io
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          ></Box>
        </StyledToolbar>
      </AppBar>
      <Menu
        sx={{
          marginTop: "5px",
        }}
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => {
          setOpen(false);
        }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem>
          <NavLink to="/">
            <Typography variant="h6">Todos</Typography>
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="important">
            <Typography variant="h6">Importants</Typography>
          </NavLink>
        </MenuItem>
      </Menu>
    </Container>
  );
};

export default Header;
