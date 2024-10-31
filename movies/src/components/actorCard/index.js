import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const ActorCard = ({ actor }) => {
    const imageUrl = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;

    return (
        <Card
            sx={{
                maxWidth: 220,
                margin: 1,
                boxShadow: 0,
            }}
        >
            <CardHeader
                title={actor.name}
                sx={{
                    fontSize: "1rem",
                    textAlign: "center",
                }}
            />
            <CardMedia
                component="img"
                height="250"
                image={imageUrl}
                alt={actor.name}
                sx={{
                    objectFit: "contain",
                }}
            />
            <CardContent sx={{ padding: 1, textAlign: "left" }}>
                <Typography variant="body2" color="text.secondary">
                    Role: {actor.character}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default ActorCard;

