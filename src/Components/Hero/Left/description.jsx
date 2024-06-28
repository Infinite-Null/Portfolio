import EachSocialCard from "./EachSocialCard.jsx";
import {Social, socials} from "../../../Utilities/Links.js";
import { motion } from "framer-motion"
import Context from "../../../Context/Context.jsx";
import {useContext} from "react";
import myImage from "../../../assets/images/me.jpeg";

function Description() {
    const {mouseEnter, mouseLeave} = useContext(Context)
    const description = "Hello, I am Ankit Kumar Shah. I am a full stack developer with extensive experience in both front-end and back-end."
    return (
        <div className={"gap-6 h-full max-w-2xl flex justify-center items-start p-5 flex-col"}>
            <a href={Social.Github} target={"_blank"} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}
               className="text-xl lg:absolute  top-10 left-10 text-black font-thin p-2 rounded-lg"
               style={{
                   fontFamily: "Playwrite MX",
                   fontWeight: 300,
                   zIndex: 989
               }}
            >@infinite-null</a>
            <motion.img
                initial={{
                    y: 50,
                    opacity: 0,
                }}
                animate={{
                    y: 0,
                    opacity: 1,
                    transition: {
                        duration: 0.5,
                        ease: [0.76, 0, 0.24, 1]
                    }
                }}
                src={myImage} alt="Ankit Kumar Shah"
                className="rounded-3xl w-full h-full object-cover lg:hidden block"/>
            <div onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: 0.5,
                            ease: [0.76, 0, 0.24, 1],
                            delay: 0.2
                        }
                    }}
                    className={"md:text-7xl md:leading-[85px] leading-[50px] text-5xl max-w-2xl font-medium"}>Ankit
                    Kumar
                </motion.div>
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 20
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: 0.5,
                            ease: [0.76, 0, 0.24, 1],
                            delay: 0.35
                        }
                    }}
                    className={"md:text-7xl md:leading-[85px] leading-[50px] text-5xl max-w-2xl font-medium"}>Shah <span
                    className={"md:text-5xl text-2xl md:px-5 md:py-3 py-2 px-5 rounded-full bg-black text-white font-bold"}>Full Stack
                    </span>
                </motion.div>
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 20
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: 0.5,
                            ease: [0.76, 0, 0.24, 1],
                            delay: 0.45
                        }
                    }}
                    className={"md:text-7xl md:leading-[85px] leading-[50px] text-5xl max-w-2xl font-medium"}>Developer.
                </motion.div>
            </div>
            <div onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}
                 className={"md:text-xl text-lg max-w-2xl font-medium"}>
                {description.split(" ").map((e, i) => {
                    return <motion.span
                        initial={{
                            opacity: 0,
                            y: 10
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 0.5,
                                ease: [0.76, 0, 0.24, 1],
                                delay: 0.5 + i * 0.02
                            }
                        }}
                        className={"inline-block px-0.5"}>{e} </motion.span>

                })}
            </div>
            <div className={"flex items-start justify-start relative gap-3"}>
                {socials.map((social, index) => {
                    return <EachSocialCard key={index} icon={social.icon} link={social.link} index={index}/>
                })}
            </div>
        </div>
    );
}

export default Description;
