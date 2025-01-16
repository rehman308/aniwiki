import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

import { Container, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import CardItem from "../components/CardItem";

const Category = () => {
    const { category } = useParams();
    const [items, setItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`http://localhost:5001/api/items/${category}`)
            .then((response) => {
                setItems(response.data);
            });
    }, [category]);

    return (
        <Container sx={{ mt: 3 }}>
            <Typography
                variant="h3"
                sx={{ mb: 2, borderBottom: "2px solid black", letterSpacing:10 }}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
            </Typography>

            <Button
                variant="contained"
                color="warning"
                sx={{ mb: 2, mr: 1 }}
                onClick={() => navigate("/")}>
                Back to Home
            </Button>

            <Button
                variant="contained"
                color="success"
                sx={{ mb: 2 }}
                onClick={() => navigate(`/${category}/add`)}>
                Add New
            </Button>

            <Grid container spacing={2}>
                {items.map((item) => (
                    <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item._id}>
                        <CardItem
                            item={item}
                            onClick={(id) => navigate(`/${category}/${id}`)}
                        />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Category;
