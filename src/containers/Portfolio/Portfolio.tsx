import {Link, Outlet} from "react-router-dom";

const Portfolio = () => {
  return (
    <>
      <div className="d-flex gap-2 mt-3">
        <Link className="btn btn-secondary" to="game">Tic-tac-toe game</Link>
        <Link className="btn btn-primary" to="lottery-game">Lottery game</Link>
      </div>
      <Outlet/>
    </>
  );
};

export default Portfolio;