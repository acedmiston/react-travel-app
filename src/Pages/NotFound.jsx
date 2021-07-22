import { Link } from 'react-router-dom';
import notFound from '../images/404.png';

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Sorry,</h2>
      <p>This page cannot be found.</p>
      <img src={notFound} alt="not found" />
      <div className="not-found-link">
        <Link to="/">Back to the homepage...</Link>
      </div>
    </div>
  );
};

export default NotFound;
