import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ViewCarouselIcon from "@mui/icons-material/ViewCarousel";

function Footer() {
    const footerSX = {
        marginTop: 3,
        bgcolor: "primary.main",
        display: "flex",
        flexDirection: {
            xs: "column",
            sm: "row",
        },
        justifyContent: "center",
    };

    const boxSX = {
        marginTop: { xs: 1, sm: 1 },
        marginBottom: { xs: 1, sm: 1 },
        marginRight: 2,
        padding: { xs: 2 },
        display: "flex",
        ":hover": {
            borderRadius: "7px",
            boxShadow: "rgba(0, 0, 0, 0.6) 0px 0px 15px",
        },
    };

    const iconSX = { color: "white", marginRight: 1 };
    const textSX = { color: "white", textDecoration: "none" };

    return (
        <Box component="footer" sx={footerSX}>
            <Box sx={boxSX}>
                <EmailIcon sx={iconSX} />
                <Typography
                    href="mailto:rehman308@gmail.com"
                    component="a"
                    sx={textSX}>
                    rehman308@gmail.com
                </Typography>
            </Box>

            <Box sx={boxSX}>
                <GitHubIcon sx={iconSX} />
                <Typography
                    href="https://github.com/rehman308"
                    component="a"
                    sx={textSX}>
                    GitHub
                </Typography>
            </Box>

            <Box sx={boxSX}>
                <LinkedInIcon sx={iconSX} />
                <Typography
                    href="https://www.linkedin.com/in/abdul-rahman-yaqoob-092470202/"
                    component="a"
                    sx={textSX}>
                    LinkedIn
                </Typography>
            </Box>

            <Box sx={boxSX}>
                <ViewCarouselIcon sx={iconSX} />
                <Typography href="#" component="a" sx={textSX}>
                    Portfolio
                </Typography>
            </Box>
        </Box>
    );
}

export default Footer;
