import React from "react";
import { Button, Card, CardContent, CardMedia, Typography } from "@mui/material";

const CardItem = ({ item, handleOnClick }) => (
    <Card
        sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: 350,
            maxHeight: 300,
            cursor: "pointer",
            ":hover": { boxShadow: "rgba(0, 0, 0, 0.4) 0px 0px 35px" },
        }}>
        <CardMedia
            component="img"
            image={item.image}
            alt={item.imageAlt}
            sx={{ minHeight: 200, maxHeight: 300, flexGrow:1 }}
        />

        <CardContent >
            <Typography variant="h5" component="div">
                {item.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Diet: {item.diet}
            </Typography>
        </CardContent>
        <Button onClick={handleOnClick(item._id)}>Learn More</Button>
    </Card>
);

export default CardItem;
