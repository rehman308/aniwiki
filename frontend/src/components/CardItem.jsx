import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const CardItem = ({ item, onClick }) => (
    <Card
        sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: 300,
            maxHeight: 300,
            cursor: "pointer",
            ":hover": { boxShadow: "rgba(0, 0, 0, 0.4) 0px 0px 35px" },
        }}
        onClick={() => onClick(item.id)}>
        <CardMedia
            component="img"
            image={item.image}
            alt={item.imageAlt}
            sx={{ minHeight: 200, maxHeight: 300 }}
        />

        <CardContent>
            <Typography variant="h5" component="div">
                {item.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Diet: {item.diet}
            </Typography>
        </CardContent>
    </Card>
);

export default CardItem;
