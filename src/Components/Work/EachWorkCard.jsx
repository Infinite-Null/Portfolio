import {FiGithub} from "react-icons/fi";
import {MdOutlineArrowOutward} from "react-icons/md";
import Context from "../../Context/Context.jsx";
import {useContext} from "react";
import {motion} from "framer-motion";

function EachWorkCard({name, description, skills, github, live, image, index}) {
    const {mouseEnter, mouseLeave} = useContext(Context)
    return (
        <motion.article
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
                    delay: 0.2 * index
                }
            }}
            className="flex bg-white rounded-lg mb-5hover:shadow-xl p-6">
            <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                <time
                    dateTime="2022-10-10"
                    className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
                >
                    <span>2022</span>
                    <span className="w-px flex-1 bg-gray-900/10"></span>
                    <span>Oct 10</span>
                </time>
            </div>

            <div className="hidden sm:block sm:basis-56">
                <img
                    alt=""
                    src="https://private-user-images.githubusercontent.com/97950192/329802952-8da0020e-45ef-46f4-9724-8e38ceef9447.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTk1MTUyODIsIm5iZiI6MTcxOTUxNDk4MiwicGF0aCI6Ii85Nzk1MDE5Mi8zMjk4MDI5NTItOGRhMDAyMGUtNDVlZi00NmY0LTk3MjQtOGUzOGNlZWY5NDQ3LmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA2MjclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNjI3VDE5MDMwMlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTdjM2ZlMGFlMGQ5NmQ2NDY2ZDY0OTczMjI2ZWI1YTEyYjk3ZjIxYjdmZTMwM2E4OWE1ZjM1MGMyYmUwOWYyMjYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.tCPEvAn0vVXtJFPjZW_DpSmFCtgOQmh5eVSXeEgRYfU"
                    className="aspect-square h-full w-full object-cover rounded-lg"
                />
            </div>

            <div className="flex flex-1 flex-col justify-between">
                <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                        <h3 className="uppercase text-gray-900 text-xl font-semibold">
                            {name}
                        </h3>

                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700 max-w-[90%] font-normal">
                        {description}
                    </p>
                    {
                        skills.map((skill, index) => (
                            <span
                                key={index}
                                className="inline-block bg-gray-400/10 text-xs font-bold uppercase text-gray-900 rounded-full px-2 py-1 mt-2 mr-2"
                            >
                                {skill}
                            </span>
                        ))
                    }
                </div>

                <div
                    className="sm:flex sm:items-end sm:justify-start pl-8 gap-2">
                    <a
                        onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}
                        href={github}
                        className="flex items-center justify-center bg-[#3e3e3e] border-[#3e3e3e] rounded-full border-2 px-5 py-3 text-center text-xs font-bold uppercase transition hover:bg-black text-white duration-500 gap-2"
                    >
                        Github <FiGithub size={20}/>
                    </a>
                    <div className="w-px h-1 bg-gray-900/10 sm:hidden"></div>
                    <a
                        onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}
                        href={live}
                        className="flex items-center justify-center bg-[#3e3e3e] border-[#3e3e3e] rounded-full border-2 px-5 py-3 text-center text-xs font-bold uppercase transition hover:bg-black text-white duration-500 gap-2"
                    >
                        Live <MdOutlineArrowOutward size={20}/>
                    </a>
                </div>
            </div>
        </motion.article>

    );
}

export default EachWorkCard;
