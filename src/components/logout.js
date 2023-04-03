import { Link } from 'react-router-dom';

const Logout = () => {
  const handleLogout = () => {
    sessionStorage.removeItem('userId');
    window.location.href = '/';
  };

  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/recipes">Recipes</Link></li>
        {sessionStorage.getItem('userId') ? (
          <>
            <li><Link to="/addrecipe">Add Recipe</Link></li>
            <li><button onClick={handleLogout}>Logout</button></li>
          </>
        ) : (
          <li><Link to="/login">Login</Link></li>
        )}
      </ul>
    </nav>
  );
};

export default Logout;
