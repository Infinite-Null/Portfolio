import EachWorkCard from "../Components/Work/EachWorkCard.jsx";
import Context from "../Context/Context.jsx";
import {useContext} from "react";
import {useState} from "react";
import {Social} from "../Utilities/Links.js";
import {motion} from "framer-motion";

function Work() {
    const {mouseEnter, mouseLeave} = useContext(Context)
    const [Active, setActive] = useState(1)
    // TODO: Add Real projects
    const WorkData = [
        {
            name:"Melody: Music Player",
            description:"Your Ultimate Ad-Free Music Companion! Developed with React Native and harnessing the power of JioSavan's Unofficial API, Melody offers you a seamless music streaming experience at your fingertips.",
            skills:["React", "Tailwind CSS", "React Icons"],
            github:Social.Github,
            live:Social.Github
        },
        {
            name:"Melody: Music Player",
            description:"Your Ultimate Ad-Free Music Companion! Developed with React Native and harnessing the power of JioSavan's Unofficial API, Melody offers you a seamless music streaming experience at your fingertips.",
            skills:["React", "Tailwind CSS", "React Icons"],
            github:Social.Github,
            live:Social.Github
        },
        {
            name:"Melody: Music Player",
            description:"Your Ultimate Ad-Free Music Companion! Developed with React Native and harnessing the power of JioSavan's Unofficial API, Melody offers you a seamless music streaming experience at your fingertips.",
            skills:["React", "Tailwind CSS", "React Icons"],
            github:Social.Github,
            live:Social.Github
        },
        {
            name:"Melody: Music Player",
            description:"Your Ultimate Ad-Free Music Companion! Developed with React Native and harnessing the power of JioSavan's Unofficial API, Melody offers you a seamless music streaming experience at your fingertips.",
            skills:["React", "Tailwind CSS", "React Icons"],
            github:Social.Github,
            live:Social.Github
        },
        {
            name:"Melody: Music Player",
            description:"Your Ultimate Ad-Free Music Companion! Developed with React Native and harnessing the power of JioSavan's Unofficial API, Melody offers you a seamless music streaming experience at your fingertips.",
            skills:["React", "Tailwind CSS", "React Icons"],
            github:Social.Github,
            live:Social.Github
        },
        {
            name:"Melody: Music Player asd",
            description:"Your Ultimate Ad-Free Music Companion! Developed with React Native and harnessing the power of JioSavan's Unofficial API, Melody offers you a seamless music streaming experience at your fingertips.",
            skills:["React", "Tailwind CSS", "React Icons"],
            github:Social.Github,
            live:Social.Github
        },
    ]
    return (
        <div id={"work"} className="grid grid-cols-1 gap-4 lg:grid-cols-[120px_1fr] lg:gap-8 py-12 lg:px-36 px-5">
            <div
                className="rounded-lg lg:flex hidden flex-col items-center justify-start pt-20 gap-0">
                <EachPaginationButton page={1} isActive={Active === 1} setIsActive={setActive}/>
                <EachPaginationButton page={2} isActive={Active === 2} setIsActive={setActive}/>
                <a
                    href={Social.Github}
                    target={"_blank"}
                    onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}
                    className={"rounded-full bg-gray-200 mt-16 w-48 h-16 text-center flex items-center justify-center font-semibold rotate-90 hover:bg-gray-300 border-2 border-transparent hover:border-white transition-colors duration-500"}>
                    All Work
                </a>
            </div>
            <div className="rounded-lg">
                <h1 className={"text-3xl mb-8"} style={{
                    fontFamily: "Playwrite MX",
                    fontWeight: 300,
                }}>
                    Some of my works!
                </h1>
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 50
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: 0.5,
                            ease: [0.76, 0, 0.24, 1],
                            delay: 0.3
                        }
                    }}
                >
                    {Active === 1 ? <>
                        {WorkData.slice(0, 3).map((work, index) => {
                            return <EachWorkCard key={index + Active * 10} {...work} index={index}/>
                        })}
                    </> : <>
                        {WorkData.slice(3, 6).map((work, index) => {
                            return <EachWorkCard key={index + Active * 10} {...work} index={index}/>
                        })}
                    </>}
                </motion.div>
            </div>
            <div
                className="rounded-lg flex lg:hidden flex-row items-center justify-center pt-5 gap-3">
                <EachPaginationButton page={1} isActive={Active === 1} setIsActive={setActive}/>
                <EachPaginationButton page={2} isActive={Active === 2} setIsActive={setActive}/>
                <a
                    href={Social.Github}
                    target={"_blank"}
                    onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}
                    className={"rounded-full mb-4 bg-gray-200 w-48 h-16 text-center flex items-center justify-center font-semibold hover:bg-gray-300 border-2 border-transparent hover:border-white transition-colors duration-500"}>
                    All Work
                </a>
            </div>
        </div>
    );
}

function EachPaginationButton({page, isActive, setIsActive}) {
    const {mouseEnter, mouseLeave} = useContext(Context)
    return (
        <a
            href={"#work"}
            onClick={() => setIsActive(page)}
            onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}
            style={{
                backgroundColor: isActive ? "#3e3e3e" : ' rgb(229,231,235)',
                color: isActive ? "white" : 'black',
            }}
            className={"rounded-full bg-gray-200 mb-4 w-16 h-16 text-center flex items-center justify-center font-semibold hover:bg-[#f5e6d5] border-2 border-transparent hover:border-white transition-colors duration-500"}>
            {page}
        </a>
    );
}

export default Work;
