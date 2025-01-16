import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
    Container,
    Typography,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from "@mui/material";
import axios from "axios";

const Detail = () => {
    const { category, id } = useParams();
    const [item, setItem] = useState(null);
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`http://localhost:5001/api/items/item/${id}`)
            .then((response) => {
                setItem(response.data);
            });
    }, [id]);

    const handleDelete = () => {
        axios.delete(`http://localhost:5001/api/items/${id}`).then(() => {
            navigate(`/${category}`);
        });
    };

    if (!item) return <Typography>Loading...</Typography>;

    return (
        <Container sx={{ mt: 3 }}>
            <Typography variant="h4" gutterBottom>
                {item.name}
            </Typography>
            <img
                src={`http://localhost:5001/${item.image}`}
                alt={item.imageAlt}
                style={{ width: "100%", height: "auto", marginBottom: "20px" }}
            />
            <Typography variant="body1" gutterBottom>
                <strong>Diet:</strong> {item.diet}
            </Typography>
            <Typography variant="body1" gutterBottom>
                <strong>Habitat:</strong> {item.habitat}
            </Typography>
            <Typography variant="body1" gutterBottom>
                <strong>Life:</strong> {item.life} years
            </Typography>
            <Typography variant="body1" gutterBottom>
                <strong>Description:</strong> {item.description}
            </Typography>
            <Button
                variant="contained"
                color="primary"
                sx={{ mr: 2 }}
                onClick={() => navigate(`/${category}/${id}/edit`)}>
                Update
            </Button>
            <Button
                variant="outlined"
                color="error"
                onClick={() => setOpen(true)}>
                Delete
            </Button>
            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>Confirm Delete</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to delete this item? This action
                        cannot be undone.
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
