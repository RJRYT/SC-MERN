import React from "react";
import ErrorPage from "../../components/common/ErrorPage";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state to show fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log error information for development or production
    this.setState({ errorInfo });
    if (process.env.NODE_ENV === "development") {
      console.error(error, errorInfo);
    }
  }

  render() {
    const { hasError, error, errorInfo } = this.state;
    const isDevelopment = process.env.NODE_ENV === "development";

    if (hasError) {
      return (
        <ErrorPage
          code={error.status}
          title="Unexpected error occoured"
          description={
            isDevelopment
              ? [error?.message, errorInfo?.componentStack]
              : [
                  "Something went wrong while loading the page. Please try again later.",
                ]
          }
          buttonText="Go back to the Previous page"
          onButtonClick={() => (window.location.href = ("/"))}
        />
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
