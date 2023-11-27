import {NavLink} from "react-router-dom";

const Toolbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-info">
      <div className="container-fluid">
        <ul className="navbar-nav mr-auto flex-row gap-2 flex-nowrap">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">Books</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/anime" className="nav-link">Anime</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/movies" className="nav-link">Movies</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Toolbar;