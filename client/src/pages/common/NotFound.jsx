import React from "react";
import { useNavigate } from "react-router-dom";
import ErrorPage from "../../components/common/ErrorPage";

export const NotFound = () => {
    const navigate = useNavigate();
    return (
        <ErrorPage
        code="404"
        title="Ooops..."
        description={[
            "The page you're looking for",
            "might have been removed",
            "or is temporarily unavailable",
        ]}
        buttonText="Let's try something different"
        onButtonClick={() => navigate("/")} // Redirects to home page
        />
    );
};

export default NotFound;
