import {Route, Routes} from "react-router-dom";
import Books from "./components/Books/Books";
import Toolbar from "./components/Toolbar/Toolbar";
import Anime from "./components/Cartoons/Anime";
import Movies from "./components/Movies/Movies";

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
        </Routes>
      </main>

    </>
  )
}

export default App
