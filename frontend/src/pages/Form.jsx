import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
    TextField,
    Button,
    Container,
    Typography,
    Grid,
    Snackbar,
    Alert,
} from "@mui/material";
import axios from "axios";

const Form = () => {
    const { category, id } = useParams();
    const navigate = useNavigate();
    const isEdit = Boolean(id);
    const [formData, setFormData] = useState({
        name: "",
        life: "",
        diet: "",
        habitat: "",
        description: "",
        image: null,
    });
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        if (isEdit) {
            axios
                .get(`http://localhost:5001/api/items/item/${id}`)
                .then((response) => {
                    const { name, life, diet, habitat, description } =
                        response.data;
                    setFormData({
                        name,
                        life,
                        diet,
                        habitat,
                        description,
                        image: null,
                    });
                });
        }
    }, [id]);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: files ? files[0] : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation
        if (
            !formData.name ||
            formData.name.length < 2 ||
            formData.name.length > 50
        ) {
            setError("Name must be between 2 and 50 characters.");
            return;
        }
        if (!formData.life || formData.life <= 0) {
            setError("Life must be a positive number.");
            return;
        }
        if (!formData.diet || !formData.habitat || !formData.description) {
            setError("All fields are required.");
            return;
        }
        if (!formData.image && !isEdit) {
            setError("Image is required.");
            return;
        }

        const data = new FormData();
        for (const key in formData) {
            if (formData[key]) data.append(key, formData[key]);
        }

        const request = isEdit
            ? axios.put(`http://localhost:5001/api/items/${id}`, data)
            : axios.post(`http://localhost:5001/api/items`, data);

        request
            .then(() => {
                setSuccess(true);
                setTimeout(() => navigate(`/${category}`), 1500);
            })
            .catch(() => setError("An error occurred. Please try again."));
    };

    return (
        <Container sx={{ mt: 3 }}>
            <Typography variant="h4" gutterBottom>
                {isEdit ? "Edit Item" : "Add New Item"}
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Name"
                            name="name"
                            fullWidth
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Lifespan (years)"
                            name="life"
                            type="number"
                            fullWidth
                            value={formData.life}
                            onChange={handleChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Diet"
                            name="diet"
                            fullWidth
                            value={formData.diet}
                            onChange={handleChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Habitat"
                            name="habitat"
                            fullWidth
                            value={formData.habitat}
                            onChange={handleChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Description"
                            name="description"
                            multiline
                            rows={4}
                            fullWidth
                            value={formData.description}
                            onChange={handleChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" component="label">
                            Upload Image
                            <input
                                type="file"
                                hidden
                                name="image"
                                onChange={handleChange}
                            />
                        </Button>
                    </Grid>
                </Grid>
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    sx={{ mt: 3 }}>
                    {isEdit ? "Update" : "Submit"}
                </Button>
            </form>
            <Snackbar
                open={!!error || success}
                autoHideDuration={3000}
                onClose={() => {
                    setError("");
                    setSuccess(false);
                }}>
                {error ? (
                    <Alert severity="error">{error}</Alert>
                ) : (
                    <Alert severity="success">Saved successfully!</Alert>
                )}
            </Snackbar>
        </Container>
    );
};

export default Form;
