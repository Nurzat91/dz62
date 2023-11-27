import {Route, Routes} from "react-router-dom";
import Books from "./components/Books/Books";
import Toolbar from "./components/Toolbar/Toolbar";
import Anime from "./components/Cartoons/Anime";
import Movies from "./components/Movies/Movies";
import Portfolio from "./containers/Portfolio/Portfolio";
import Game from "./containers/Game/Game";
import BallGame from "./containers/BallGame/BallGame";

function App() {

  return (
    <>
      <header>
        <Toolbar/>
      </header>
      <main className="container">
        <Routes>
          <Route
            path="/" element={(
            <Books/>
          )}/>
          <Route
            path="/anime" element={(
            <Anime/>
          )}/>
          <Route
            path="/movies" element={(
            <Movies/>
          )}/>
          <Route path="/portfolio" element={(
            <Portfolio/>
          )}>
            <Route path="game" element={<Game/>}/>
            <Route path="lottery-game" element={<BallGame/>}/>
          </Route>
          <Route path="*" element={(<h1>Not Found!</h1>)}/>
        </Routes>
      </main>

    </>
  )
}

export default App
