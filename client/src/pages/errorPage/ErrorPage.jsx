import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <div>
      <h1>ErrorPage</h1>
      <h3>404</h3>
      <Link to={"/"}>click her to home </Link>
    </div>
  );
};
