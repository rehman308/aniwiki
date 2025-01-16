import React, { useEffect, useState } from "react";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import CardItem from "../components/CardItem";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const url = import.meta.env.VITE_URL + "api/items";
    const [items, setItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(url).then((response) => {
            const randomItems = response.data
                .sort(() => 0.5 - Math.random())
                .slice(0, 12);
            setItems(randomItems);
        });
    }, []);

    return (
        <Container
            component="main"
            maxWidth="lg"
            sx={{ marginTop: 4, flexGrow: 1 }}>
            <Grid container spacing={2}>
                {items.map((item) => (
                    <Grid size={{ xs: 12, sm: 6, md: 3 }} key={item._id}>
                        <CardItem
                            item={item}
                            onClick={(id) => navigate(`/animals/${_id}`)}
                        />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Home;
