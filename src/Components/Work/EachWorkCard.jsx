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


            <div className="hidden sm:block sm:basis-56">
                <img
                    alt=""
                    src={image}
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
                        target={"_blank"}
                        onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}
                        href={github}
                        className="flex items-center justify-center bg-[#3e3e3e] border-[#3e3e3e] rounded-full border-2 px-5 py-3 text-center text-xs font-bold uppercase transition hover:bg-black text-white duration-500 gap-2"
                    >
                        Github <FiGithub size={20}/>
                    </a>
                    <div className="w-px h-1 bg-gray-900/10 sm:hidden"></div>
                    <a
                        target={"_blank"}
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
