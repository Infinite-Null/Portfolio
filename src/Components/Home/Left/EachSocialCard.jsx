import {motion} from "framer-motion";
import Context from "../../../Context/Context.jsx";
import {useContext} from "react";

function EachSocialCard({icon, link, index}) {
    const {mouseEnter, mouseLeave} = useContext(Context)
    return (
        <motion.a
            onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}
            initial={{
                opacity: 0,
                y: 30
            }}
            animate={{
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.5,
                    ease: [0.76, 0, 0.24, 1],
                    delay: 0.7+ index * 0.09
                }
            }}
            href={link} target={"_blank"} className={`p-6 rounded-full bg-gray-200 hover:bg-[#f5e6d5] border-2 border-transparent hover:border-white transition-colors duration-500 flex items-center justify-center`}>
            {icon}
        </motion.a>
    );
}

export default EachSocialCard;
