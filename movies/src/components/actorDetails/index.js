import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";

const ActorDetails = ({ actor }) => {
    // Handle case where actor data is not available
    if (!actor) {
        return (
            <Typography variant="h6" color="text.secondary" sx={{ mt: 3, textAlign: 'center' }}>
                Actor details not available.
            </Typography>
        );
    }

    return (
        <Card sx={{ maxWidth: 600, margin: "auto", mt: 3 }}>
            <CardMedia
                component="img"
                image={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                alt={actor.name}
                sx={{ height: 400 }}
            />
            <CardContent>
                <Typography variant="h5" component="div">
                    {actor.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {actor.biography || "Biography not available."}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Known For: {actor.known_for ? actor.known_for.map(film => film.title).join(', ') : "N/A"}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default ActorDetails;
