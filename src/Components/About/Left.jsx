import {motion} from "framer-motion";
import Context from "../../Context/Context.jsx";
import {useContext} from "react";

function LeftAbout() {
    const {mouseEnter, mouseLeave} = useContext(Context)
    const description = "I am an enthusiastic individual deeply passionate about technology and coding."
    const description2 = "I am a full stack developer who leverage modern frameworks and libraries to build robust and responsive software solutions."
    const description3 = "I am also into mobile application development with React Native and Flutter, broadening my skill set and versatility."
    const animationValues={
        duration: 0.4,
        y: 10,
        delay: 0.008
    }
    return (
        <div className={"gap-12 h-full max-w-2xl flex justify-center items-start p-5 flex-col text-white"}>
            <div onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                <h1 className={"text-3xl"} style={{
                    fontFamily: "Playwrite MX",
                    fontWeight: 300,
                }}>
                    hey there!
                </h1>
            </div>
            <div onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}
                 className={"md:text-xl text-lg max-w-2xl font-medium"}>
                {description.split(" ").map((e, i) => {
                    return <motion.span
                        initial={{
                            opacity: 0,
                            y: animationValues.y
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: animationValues.duration,
                                ease: [0.76, 0, 0.24, 1],
                                delay: i * animationValues.delay
                            }
                        }}
                        className={"inline-block px-0.5"}>{e} </motion.span>

                })}
                <br/>
                <br/>
                {description2.split(" ").map((e, i) => {
                    return <motion.span
                        initial={{
                            opacity: 0,
                            y: animationValues.y
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: animationValues.duration,
                                ease: [0.76, 0, 0.24, 1],
                                delay: i * animationValues.delay
                            }
                        }}
                        className={"inline-block px-0.5"}>{e} </motion.span>

                })}
                <br/>
                <br/>
                {description3.split(" ").map((e, i) => {
                    return <motion.span
                        initial={{
                            opacity: 0,
                            y: animationValues.y
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: animationValues.duration,
                                ease: [0.76, 0, 0.24, 1],
                                delay: i * animationValues.delay
                            }
                        }}
                        className={"inline-block px-0.5"}>{e} </motion.span>
                })}
                <br/>
                <br/>
                {/*TODO: Add a download resume link*/}
                <a href={"#"} className={"text-sm mt-16 rounded-full p-4 bg-[#545353] hover:bg-[#474040] duration-500 transition-colors"}>Download Resume</a>
            </div>
        </div>
    );
}

export default LeftAbout;
