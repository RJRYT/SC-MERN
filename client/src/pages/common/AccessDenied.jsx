import React from "react";
import { useNavigate } from "react-router-dom";
import ErrorPage from "../../components/common/ErrorPage";

export const AccessDenied = () => {
  const navigate = useNavigate();
  return (
    <ErrorPage
      code="403"
      title="Access Denied"
      description={[
        "Sorry, you don't",
        "have permission to",
        "access this page",
      ]}
      buttonText="Go back to the Previous page"
      onButtonClick={() => navigate(-1)} // Redirects to previous page
    />
  );
};

export default AccessDenied;
