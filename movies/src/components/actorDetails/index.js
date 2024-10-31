import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";

const ActorDetails = ({ actor }) => {
    return (
        <Card sx={{ maxWidth: 600, margin: "auto", mt: 3 }}>
            <CardMedia
                component="img"
                image={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                alt={actor.name}
                sx={{ height: 400 }} // Adjust height as needed
            />
        
export default ActorDetails;