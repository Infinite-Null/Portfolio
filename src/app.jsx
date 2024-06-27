import Description from "./Components/Home/Left/description.jsx";
import Image from "./Components/Home/Right/Image.jsx";
import ContextState from "./Context/ContextState.jsx";
import Mouse from "./Components/Mouse/Mouse.jsx";
import Navbar from "./Components/NavBar/Navbar.jsx";

export function App() {
  return (
      <ContextState>
          <Mouse/>
          <Navbar/>
          <div className="grid grid-cols-1 gap-1 lg:grid-cols-5 lg:gap-1">
              <div className="h-[100vh] bg-[#f9f9f9] lg:col-span-3 flex items-center justify-center">
                  <Description/>
              </div>
              <div className="h-[100vh] bg-[#3e3e3e] lg:col-span-2 overflow-visible relative flex items-center">
                  <Image/>
              </div>
          </div>
      </ContextState>
  )
}
