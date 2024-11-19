import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getActorDetails } from "../api/tmdb-api"; 
import Spinner from "../components/spinner";
import ActorDetails from "../components/actorDetails";  
import Typography from "@mui/material/Typography";
import PageTemplate from "../components/templateActorPage";

const ActorDetailsPage = () => {
    const { id } = useParams();

    const { data: actor, error, isLoading, isError } = useQuery(["actor", {id} ], getActorDetails);
    console.log(actor)

    if (isLoading) {
        return <Spinner />;
    }

    if (isError) {
        return <Typography variant="h5">Error: {error.message}</Typography>;
    }

    return (
        <PageTemplate actor={actor}>
            <ActorDetails actor={actor} />
        </PageTemplate>
    );
};

export default ActorDetailsPage;
