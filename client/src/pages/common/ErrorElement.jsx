import React from "react";
import { useNavigate } from "react-router-dom";
import ErrorPage from "../../components/common/ErrorPage";

export const ErrorElement = () => {
  const navigate = useNavigate();
  return (
    <ErrorPage
      code="Error!"
      title="Unexpected error occoured"
      description={[
        "Sorry, request page is not avaliable now",
      ]}
      buttonText="Go back to the Previous page"
      onButtonClick={() => navigate(-1)} // Redirects to previous page
    />
  );
};

export default ErrorElement;
