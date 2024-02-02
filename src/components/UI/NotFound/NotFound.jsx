import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container mx-auto text-center my-8">
      <h1 className="text-4xl font-bold text-red-500">404 - Not Found</h1>
      <p className="text-lg mt-4">The page you are looking for does not exist.</p>
      <Link to="/" className="text-blue-500 underline mt-4 block">Go back to Home</Link>
    </div>
  );
};

export default NotFound;
