import Context from "../../Context/Context.jsx";
import {useContext} from "react";
import {Social} from "../../Utilities/Links.js";
import SideMenu from "./SideMenu.jsx";
import {useState} from "react";
import {AnimatePresence} from "framer-motion";

function Navbar() {
    const {mouseEnter, mouseLeave} = useContext(Context)
    const [isOpen, setIsOpen] = useState(false)
    return (
          <>
              <AnimatePresence mode={"wait"}>
                  {isOpen && <SideMenu seTisOpen={setIsOpen}/>}
              </AnimatePresence>
            <nav className="p-4 flex justify-between items-center fixed top-0 w-full" style={{
                background: 'rgba(255,255,255,0)',
                zIndex: 100,
            }}>
                    <a href={Social.Github} target={"_blank"} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} className="text-xl text-black font-thin bg-white bg-opacity-60 lg:bg-opacity-0 p-2 rounded-lg"
                    style={{
                        fontFamily: "Playwrite MX",
                        fontWeight: 300,
                    }}
                    >@infinite-null</a>
                <div>
                    <button onClick={()=>setIsOpen(true)} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} className="text-black text-4xl bg-white h-16 w-16 rounded-full">
                        =
                    </button>
                </div>
            </nav>
          </>
    );
}

export default Navbar;
