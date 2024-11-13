import React from "react";
import { useNavigate } from "react-router-dom"; 
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const ActorCard = ({ actor }) => {
    const navigate = useNavigate(); 

    const handleClick = () => {
        navigate(`/actor/${actor.id}`); 
    };

    const imageUrl = actor.profile_path
        ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
        : "https://via.placeholder.com/220x250?text=No+Image";

    return (
        <Card
            onClick={handleClick} 
            sx={{
                maxWidth: 220,
                margin: 1,
                boxShadow: 2,
                cursor: "pointer", 
                transition: "transform 0.2s",
                "&:hover": {
                    transform: "scale(1.05)",
                },
            }}
        >
            <CardHeader
                title={actor.name}
                sx={{
                    fontSize: "1rem",
                    textAlign: "center",
                    paddingBottom: 0,
                }}
            />
            <CardMedia
                component="img"
                height="250"
                image={imageUrl}
                alt={actor.name}
                sx={{
                    objectFit: "cover",
                    borderRadius: "4px",
                }}
            />
            <CardContent sx={{ padding: 1, textAlign: "center" }}>
                <Typography variant="body2" color="text.secondary">
                    Role: {actor.character}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default ActorCard;


