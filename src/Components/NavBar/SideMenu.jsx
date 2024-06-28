import {ImCross} from "react-icons/im";
import {Social} from "../../Utilities/Links.js";
import Context from "../../Context/Context.jsx";
import {useContext} from "react";
import { motion} from "framer-motion";

function SideMenu({seTisOpen}) {
    const {mouseEnter, mouseLeave} = useContext(Context)
    const links = [
        {
            name: "Home",
            link: "#home"
        },
        {
            name: "About",
            link: "#about"
        },
        {
            name: "Work",
            link: "#work"
        },
        {
            name: "Contact",
            link: "#contact"
        }
    ]
    return (
        <>
            <motion.div
                key={1000000000}
                initial={{
                    opacity: 0
                }}
                animate={{
                    opacity: 1,
                    transition: {
                        duration: 0.5,
                        ease: [0.76, 0, 0.24, 1],
                        delay: 0.2
                    }
                }}
                exit={{
                    opacity: 0,
                    transition: {
                        duration: 0.5,
                        ease: [0.76, 0, 0.24, 1],
                        delay: 0.5
                    }
                }}
                className={"fixed h-[100vh] w-[100vw] bg-black bg-opacity-50"}
                 style={{
                     zIndex: 990,
                 }}/>
            <motion.div
                initial={{
                    x: "100%",
                }}
                animate={{
                    x: 0,
                    transition: {
                        duration: 0.5,
                        ease: [0.76, 0, 0.24, 1]
                    }
                }}
                exit={{
                    x: "100%",
                    transition: {
                        duration: 0.5,
                        ease: [0.76, 0, 0.24, 1]
                    }
                }}
                className={"fixed right-0 h-[100vh] w-full max-w-2xl bg-white shadow-2xl"} style={{
                zIndex: 999,
            }}>
                <div className={"flex justify-end p-4"}>
                    <button
                        onMouseEnter={mouseEnter}
                        onMouseLeave={mouseLeave}
                        onClick={()=>seTisOpen(false)}
                        className={"text-2xl bg-black p-5 rounded-full"} style={{
                            zIndex: 10000
                    }}><ImCross color={"white"}/></button>
                </div>
                <div className={"h-16"}/>
                <div className={"flex flex-col items-start px-16 font-normal"}>
                    {links.map((link, index) =>
                        <EachLink key={index} link={link.link} name={link.name} index={index} seTisOpen={seTisOpen}/>
                    )}
                </div>

                <div className={'absolute bottom-[90px]'}>
                    <div className={"flex gap-6 items-start px-16 font-normal"}>
                        <a href={Social.Linkedin} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} target={"_blank"} className={"text-[100%]"}>LinkedIn</a>
                        <a href={Social.Github} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} target={"_blank"} className={"text-[100%]"}>GitHub</a>
                        <a href={Social.Instagram} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} target={"_blank"} className={"text-[100%]"}>Instagram</a>
                    </div>
                </div>
            </motion.div>
        </>
    );
}

function EachLink({link, name, index, seTisOpen}) {
    const {mouseEnter, mouseLeave} = useContext(Context)
    return (<motion.a
        initial={{
            y: 40,
            opacity: 0
        }}
        whileHover={{
            borderBottom: "3px solid #2b2b2b",
            width: "100%",
            paddingLeft: "10px",
            transition: {
                duration: 0.5,
                ease: [0.76, 0, 0.24, 1]
            }
        }}
        animate={{
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                delay: 0.55+index * 0.15,
                ease: [0.76, 0, 0.24, 1]
            },
        }}
        onClick={()=>seTisOpen(false)}
        onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} href={link} className={"text-[350%] border-b-[3px] border-b-transparent"}>{name}</motion.a>)
}

export default SideMenu;
