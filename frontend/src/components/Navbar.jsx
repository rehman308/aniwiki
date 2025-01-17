import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Typography,
    Drawer,
    List,
    ListItem,
    ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const toggleDrawer = () => setMobileOpen(!mobileOpen);

    const navLinks = [
        { title: "Home", path: "/api/items" },
        { title: "Animal", path: "/api/items/animal" },
        { title: "Fish", path: "/api/items/fish" },
        { title: "Insect", path: "/api/items/insect" },
        { title: "About", path: "/about" },
    ];

    return (
        <>
            <AppBar position="sticky">
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={toggleDrawer}
                        aria-label="drawer button"
                        sx={{ display: { xs: "flex", sm: "none" } }}>
                        <MenuIcon />
                    </IconButton>

                    <Typography
                        variant="h4"
                        component={Link}
                        to="/api/items"
                        sx={{ color: "white", textDecoration: "none" }}>
                        AniWiki
                    </Typography>

                    <Box
                        sx={{
                            marginLeft: "2rem",
                            display: { xs: "none", sm: "flex" },
                        }}>
                        {navLinks.map((link, index) => (
                            <Typography
                                key={index}
                                variant="h6"
                                component={Link}
                                to={link.path}
                                sx={{
                                    paddingY: 1,
                                    paddingX: 3,
                                    color: "white",
                                    textDecoration: "none",
                                    "&:hover": {
                                        borderRadius: "7px",
                                        textDecoration: "underline",
                                        boxShadow:
                                            "rgba(0, 0, 0, 0.4) 0px 0px 15px;",
                                    },
                                }}>
                                {link.title}
                            </Typography>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>

            <Drawer open={mobileOpen} onClose={toggleDrawer}>
                <List>
                    {navLinks.map((link) => (
                        <ListItem
                            button
                            component={Link}
                            to={link.path}
                            key={link.title}
                            onClick={toggleDrawer}
                            sx={{
                                paddingY: 1,
                                paddingX: 6,
                                width: "contents",
                                color: "black",
                                ":hover": {
                                    textDecoration: "underline",
                                    boxShadow:
                                        "rgba(0, 0, 0, 0.35) 0px 0px 15px;",
                                },
                            }}>
                            <ListItemText primary={link.title} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </>
    );
};

export default Navbar;
