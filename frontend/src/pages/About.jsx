import React from "react";

import { Box, Typography, Container } from "@mui/material";
import CircleIcon from "@mui/icons-material/CheckCircle";

function About() {
    return (
        <>
            <Box
                component="main"
                sx={{
                    padding:5,
                    flexGrow: 1,
                    backgroundImage:
                        "url('https://www.transparenttextures.com/patterns/axiom-pattern.png')",
                }}>
                <Box
                    sx={{                        
                        maxWidth: "md",
                        display: "flex",
                        flexDirection: "column",
                        placeSelf: "center",
                        alignItems: "center",
                    }}>
                    <Typography variant="h4" sx={{ letterSpacing: 10 }}>
                        Software Developer
                    </Typography>

                    <Typography
                        variant="h2"
                        sx={{ marginTop: 1, letterSpacing: 10 }}>
                        Abdul Rehman
                    </Typography>

                    <Box
                        display="flex"
                        sx={{
                            marginTop: 1,
                            padding: 1,
                            border: "1px solid black",
                        }}>
                        <CircleIcon
                            sx={{ marginRight: 1, alignSelf: "center" }}
                        />
                        <Typography variant="h6" sx={{ letterSpacing: 5 }}>
                            Available for hiring/projects
                        </Typography>
                    </Box>
                    <Typography
                        variant="body1"
                        sx={{
                            marginTop: 3,
                            letterSpacing: 2,
                            textAlign: "center",
                        }}>
                        I am a highly motivated MERN stack developer with
                        experience in building robust and user-friendly web
                        applications. My expertise lies in frontend development
                        using React, JavaScript, CSS, MUI, Bootstrap and backend
                        development with Node.js, Express.js, and MongoDB/MySQL.
                        I am proficient in RESTful API design, agile
                        methodologies, and version control systems like Git. I
                        am a fast learner, a strong team player, and always
                        eager to contribute to innovative projects. You can find
                        my projects and contact information below.
                    </Typography>

                    <Typography variant="h5" sx={{ marginTop: 2 }}>
                        Overview of this project
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            marginTop: 1,
                            letterSpacing: 2,
                            textAlign: "center",
                        }}>
                        This is a responsive web application built with
                        user-friendly mobile experience in mind, using the
                        latest versions of Node.js, Express.js, React (with
                        Vite), and Material-UI (MUI). The application allows
                        users to manage a catalog of animals, fishes, and
                        insects by adding, updating, deleting, and viewing
                        details about each item. The backend is powered by a
                        RESTful API with data stored in MongoDB.
                    </Typography>
                </Box>
            </Box>
        </>
    );
}

export default About;
