import {NavLink} from "react-router-dom";

const Toolbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <ul className="navbar-nav mr-auto flex-row gap-2 flex-nowrap">
          <li className="nav-item">
            <NavLink to="/" className="nav-link"
                     style={({ isActive, isPending, isTransitioning }) => {
                       return {
                         fontWeight: isActive ? "bold" : "",
                         color: isPending ? "green" : "white",
                         viewTransitionName: isTransitioning ? "slide" : "",
                       };
                     }}>Books</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/anime" className="nav-link"
                     style={({ isActive, isPending, isTransitioning }) => {
                       return {
                         fontWeight: isActive ? "bold" : "",
                         color: isPending ? "green" : "white",
                         viewTransitionName: isTransitioning ? "slide" : "",
                       };
                     }}>Anime</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/movies" className="nav-link"
                     style={({ isActive, isPending, isTransitioning }) => {
                       return {
                         fontWeight: isActive ? "bold" : "",
                         color: isPending ? "green" : "white",
                         viewTransitionName: isTransitioning ? "slide" : "",
                       };
                     }}
            >Movies</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Toolbar;