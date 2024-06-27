import ContextState from "./Context/ContextState.jsx";
import Mouse from "./Components/Mouse/Mouse.jsx";
import Navbar from "./Components/NavBar/Navbar.jsx";
import Hero from "./Screens/Hero.jsx";
import About from "./Screens/About.jsx";
import Work from "./Screens/Work.jsx";

export function App() {
  return (
      <ContextState>
        <Mouse/>
        <Navbar/>
        <Hero/>
        <About/>
        <Work/>
      </ContextState>
  )
}
