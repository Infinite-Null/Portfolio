import EachSocialCard from "./EachSocialCard.jsx";
import {FaInstagram, FaLinkedinIn} from "react-icons/fa";
import {FiGithub} from "react-icons/fi";
import {Social} from "../../../Utilities/Links.js";
import { motion } from "framer-motion"
import Context from "../../Context/Context.jsx";
import {useContext} from "react";

function Description() {
    const {mouseEnter, mouseLeave} = useContext(Context)
    const socials = [
        {
            name: "LinkedIn",
            link: Social.Linkedin,
            icon: <FaLinkedinIn size={20}/>
        },
        {
            name: "GitHub",
            link: Social.Github,
            icon: <FiGithub size={20}/>
        },
        {
            name: "Instagram",
            link: Social.Instagram,
            icon: <FaInstagram size={20}/>
        }
    ]
    const description = "Hello, I am Ankit Kumar Shah. I am a full stack developer with extensive experience in both front-end and back-end."
    return (
        <div className={"gap-6 h-full max-w-2xl flex justify-center items-start p-5 flex-col"}>
            <div onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 30,
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
                        y: 30
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
                        y: 30
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
            <div onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} className={"md:text-xl text-lg max-w-2xl font-medium"}>
                {description.split(" ").map((e, i)=>{
                    return <motion.span
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
                                delay: 0.7+ i*0.05
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