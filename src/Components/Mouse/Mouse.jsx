import {useEffect} from "react";
import {motion, useSpring} from "framer-motion";
import {useContext} from "react";
import Context from "../../Context/Context.jsx";
function Mouse() {
    const {Hovered} = useContext(Context)
    const mousePosition = {
        x: useSpring(0, {stiffness: 900, damping: 35}),
        y: useSpring(0, {stiffness: 900, damping: 35})
    }
    useEffect(()=>{
        window.addEventListener("mousemove", (e)=>{
            mousePosition.x.set(e.clientX - 12.5)
            mousePosition.y.set(e.clientY - 12.5)
        })
        return ()=> window.removeEventListener("mousemove", (e)=>{
                mousePosition.x.set(e.clientX)
                mousePosition.y.set(e.clientY)
            })
    },[])
    return (
        <motion.div
            className={"h-[25px] w-[25px] bg-blend-lighten rounded-full md:block hidden"}
            style={{
                position: "fixed",
                top: mousePosition.y,
                left:mousePosition.x,
                pointerEvents: "none",
                scale: Hovered ? 3 : 1,
                backgroundColor: Hovered ? "#fcc99a" : "#030303",
                mixBlendMode: Hovered?"difference":"normal",
                zIndex: 1000,
                transition: "all 0.015s ease-in-out"
            }}
        />
    );
}

export default Mouse;
