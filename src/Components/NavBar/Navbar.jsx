import Context from "../../Context/Context.jsx";
import {useContext} from "react";
import {Social} from "../../Utilities/Links.js";

function Navbar() {
    const {mouseEnter, mouseLeave} = useContext(Context)
    return (
            <nav className="p-4 flex justify-between items-center fixed top-0 w-full" style={{
                background: 'rgba(255,255,255,0)',
                zIndex: 100,
            }}>
                <div className="text-white">
                    <a href={Social.Github} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} className="text-xl text-black font-thin"
                    style={{
                        fontFamily: "Playwrite MX",
                        fontWeight: 300,
                    }}
                    >@infinite-null</a>
                </div>
                <div>
                    <button onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} className="text-black text-4xl bg-white h-16 w-16 rounded-full">
                        =
                    </button>
                </div>
            </nav>
    );
}

export default Navbar;
