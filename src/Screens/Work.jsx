import EachWorkCard from "../Components/Work/EachWorkCard.jsx";
import Context from "../Context/Context.jsx";
import {useContext} from "react";
import {useState} from "react";
import {Social} from "../Utilities/Links.js";
import {motion} from "framer-motion";
import ecommerce from "../assets/Projects/ecommerce.png"
import melody from "../assets/Projects/melody.png"
import nekoflix from "../assets/Projects/Nekoflix.png"
import fungrow from "../assets/Projects/fungrow.png"
import o2 from "../assets/Projects/O2Ai.png"
import outofkind from "../assets/Projects/Outofkind.png"
function Work() {
    const {mouseEnter, mouseLeave} = useContext(Context)
    const [Active, setActive] = useState(1)
    const WorkData = [
        {
            name:"Melody: Music Player",
            description:"Introducing Melody: Your Ultimate Ad-Free Music Companion! Developed with React Native and harnessing the power of JioSavan's Unofficial API, Melody offers you a seamless music streaming experience at your fingertips. Dive into a world of limitless tunes, curated playlists, and personalized recommendations—all without interruptions",
            skills:[
                "application",
                "react-native",
                "online-music-player",
                "music-app",
                "react-native-reanimated",
            ],
            github:"https://github.com/Infinite-Null/Melody",
            live:"https://melody-landing-page-one.vercel.app/",
            image:melody
        },
        {
            name:"Nekoflix: Anime and Manga Haven!",
            description:"Introducing Nekoflix, your all-in-one destination for anime and manga enthusiasts! With Nekoflix, users can seamlessly stream their favorite anime and dive into captivating manga series, all without interruptions and completely free of charge. Our sleek and user-friendly interface ensures a delightful experience ",
            skills:[
                "application",
                "react-native",
                "react-native-reanimatedv2",
                "Rest-API",
            ],
            github:"https://github.com/Infinite-Null/NekoFlix",
            live:"https://nekoflix-landing-page.vercel.app/",
            image:nekoflix
        },
        {
            name:"Ecommerce: Full-Stack Ecommerce Website!",
            description:"A responsive e-commerce website built with the MERN stack and JWT authentication. It includes secure user login, product management, shopping cart, and order management, using technologies like React, Node.js, Express, MongoDB, and Tailwind CSS.",
            skills:["Full Stack","React", "Tailwind CSS", "MongoDB", "Express", "Node.js", "JWT Authentication"],
            github:"https://github.com/Infinite-Null/E-Commerce/",
            live:"https://ecommerce-frontend-phi-three.vercel.app/",
            image:ecommerce
        },
        {
            name:"Out of Kind: Full-Stack Donation Website!",
            description:"In this platform user can donate by listing it in the platform and the person who needs it will collect it from him, Even user can get the information for NOG's near them by heading to search section. Finally we have a community section where user can share any kind story to motivate others. ",
            skills:["Next.js", "Tailwind CSS", "MongoDB", "Express", "Node.js", "JWT Authentication"],
            github:"https://github.com/Infinite-Null/OutOfKind",
            live:"https://out-of-kind.vercel.app/",
            image:outofkind
        },
        {
            name:"Funngro: Landing Page",
            description:"Welcome to Fungrow, a sleek and interactive landing page built with React. Fungrow is designed to showcase a modern approach to online learning and skill enhancement. This project demonstrates responsive design principles using styled-components for styling. ",
            skills:["React", "Tailwind CSS", "Vite"],
            github:"https://github.com/Infinite-Null/Funngro",
            live:"https://funngro-xi.vercel.app/",
            image:fungrow
        },
        {
            name:"O2 AI: Gemini API Integration",
            description:"The React Native O2 AI app integrates Gemini AI API for diverse user experiences. Chat-based interactions offer access to information and AI-generated tools for composing emails, code, essays, and removing plagiarism. Users can also extract insights from images, enhancing productivity and problem-solving.",
            skills:["React Native", "Gemini API", "AI Integration"],
            github:"https://github.com/Infinite-Null/O2_AI",
            live:"https://github.com/Infinite-Null/O2_AI/releases/tag/v2",
            image:o2
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
