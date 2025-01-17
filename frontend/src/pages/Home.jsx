import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import axios from "axios";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import CardItem from "../components/CardItem";
import Loading from "../components/Loading";

const Home = () => {
    const url = import.meta.env.VITE_URL + "api/items";
    const navigate = useNavigate();

    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios
            .get(url)
            .then((response) => {
                const randomItems = response.data
                    .sort(() => 0.5 - Math.random())
                    .slice(0, 12);
                setItems(randomItems);
            })
            .catch((error) => {
                navigate("/error");
            })
            .finally(setIsLoading(false));
    }, []);

    const handleOnClick = (itemId) => () => {
        navigate(`/api/items/${itemId}/detail`);
    };

    if (isLoading) {
        return <Loading />;
    }

    return (
        <Container
            component="main"
            maxWidth="lg"
            sx={{ marginTop: 4, flexGrow: 1 }}>
            <Grid container spacing={2}>
                {items.map((item) => (
                    <Grid size={{ xs: 12, sm: 6, md: 3 }} key={item._id}>
                        <CardItem item={item} handleOnClick={handleOnClick} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Home;
