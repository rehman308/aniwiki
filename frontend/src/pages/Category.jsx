import React, { useEffect, useState } from "react";
import axios from "axios";

import CardItem from "../components/CardItem";
import Loading from "../components/Loading";

import { useParams, useNavigate } from "react-router-dom";

import { Container, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";

const Category = () => {
    const { category } = useParams();
    const navigate = useNavigate();
    const url = import.meta.env.VITE_URL + `api/items/?category=${category}`;
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios
            .get(url)
            .then((response) => {
                setItems(response.data);
            })
            .catch((e) => {
                navigate("/error");
            });
    }, [category]);

    const handleOnClick = (itemId) => () => {
        navigate(`/api/items/${itemId}/detail`);
    };

    if (!category) {
        return <Loading />;
    }

    return (
        <Container sx={{ mt: 3 }}>
            <Typography
                variant="h3"
                sx={{
                    mb: 2,
                    borderBottom: "2px solid black",
                    letterSpacing: 10,
                }}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
            </Typography>

            <Button
                variant="contained"
                color="warning"
                sx={{ mb: 2, mr: 1 }}
                onClick={() => navigate("/api/items")}>
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
                        <CardItem item={item} handleOnClick={handleOnClick} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Category;
