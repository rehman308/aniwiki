import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import Loading from "../components/Loading";

import {
    Box,
    Button,
    Container,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Typography,
} from "@mui/material";

const Detail = () => {
    const { itemId } = useParams();
    const navigate = useNavigate();
    const url = import.meta.env.VITE_URL + `api/items/${itemId}/detail`;
    const delUrl = import.meta.env.VITE_URL + `api/items/${itemId}/delete`;

    const [item, setItem] = useState(null);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        axios.get(url).then((response) => {
            setItem(response.data);
        });
    }, [item]);

    const handleDelete = () => {
        axios.delete(delUrl).then(() => {
            navigate(`/api/items/${item.category}`);
        });
    };

    if (!item) return <Loading />;

    return (
        <Container
            sx={{
                mt: 3,
            }}>
            <Typography
                variant="h4"
                sx={{ letterSpacing: 5, borderBottom: "2px solid black" }}>
                {item.name}
            </Typography>

            <img
                src={item.image}
                alt={item.imageAlt}
                style={{
                    width: "100%",
                    height: "auto",
                    marginTop: "2rem",
                    border: "1px solid black",
                    borderRadius: "10px",
                    boxShadow: "rgba(0, 0, 0, 0.4) 0px 0px 50px",
                }}
            />

            <Box sx={{ mt: 3, pl: 2, borderLeft: "2px solid black" }}>
                <Typography variant="h6">
                    <strong>Diet:</strong> {item.diet}
                </Typography>

                <Typography variant="h6">
                    <strong>Habitat:</strong> {item.habitat}
                </Typography>

                <Typography variant="h6">
                    <strong>Life:</strong> {item.life} years
                </Typography>

                <Typography variant="h6">
                    <strong>Description:</strong> {item.description}
                </Typography>
            </Box>

            <Box sx={{ mt: 3, display: "flex" }}>
                <Button
                    variant="contained"
                    color="warning"
                    sx={{ mr: 2 }}
                    onClick={() => navigate(`/api/items/${item.category}`)}>
                    {`Back to ${item.category}`}
                </Button>

                <Button
                    variant="contained"
                    color="primary"
                    sx={{ mr: 2 }}
                    onClick={() => navigate(`/${category}/${id}/edit`)}>
                    Update
                </Button>

                <Button
                    variant="contained"
                    color="error"
                    onClick={() => setOpen(true)}>
                    Delete
                </Button>
            </Box>

            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>Confirm Delete</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to delete{" "}
                        <strong>{item.name}</strong>?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Cancel</Button>
                    <Button onClick={handleDelete} color="error">
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
};

export default Detail;
