import React from "react";
import { useParams } from "react-router-dom"; // Import useParams
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { useQuery } from "react-query";
import { getActorDetails } from "../../api/tmdb-api"; // Import the API function

const ActorDetails = () => {
    const { id } = useParams(); // Get actor ID from URL

    // Fetch actor details
    const { data: actor, isLoading, isError, error } = useQuery(
        ["actorDetails", { id }],
        () => getActorDetails({ queryKey: ["actorDetails", { id }] })
    );

    if (isLoading) {
        return <Typography>Loading actor details...</Typography>;
    }

    if (isError) {
        return (
            <Typography variant="h6" color="text.secondary" sx={{ mt: 3, textAlign: 'center' }}>
                Error loading actor details: {error.message}
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
                    Known For: {actor.known_for_department || "N/A"}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default ActorDetails;

