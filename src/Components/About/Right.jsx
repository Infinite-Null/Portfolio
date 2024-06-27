import {motion} from "framer-motion";
import Context from "../../Context/Context.jsx";
import {useContext} from "react";
import {useMemo} from "react";
import {
    TbBrandFlutter,
    TbBrandNodejs,
    TbBrandReact,
    TbBrandReactNative, TbCloud,
    TbDatabase
} from "react-icons/tb";
import {BiSolidServer} from "react-icons/bi";
import {AiOutlineLinux} from "react-icons/ai";

function RightSkills() {
    const {mouseEnter, mouseLeave} = useContext(Context)
    const skillIconSize = 30;
    const skills = useMemo(()=>[
        {
            name:"MongoDB",
            description:"NoSQL Database.",
            icon: <TbDatabase size={skillIconSize}/>
        },
        {
            name:"ExpressJS",
            description:"Backend Library.",
            icon: <BiSolidServer size={skillIconSize}/>
        },
        {
            name:"React",
            description:"Frontend Library.",
            icon: <TbBrandReact size={skillIconSize}/>
        },
        {
            name:"NodeJS",
            description:"Runtime Environment.",
            icon: <TbBrandNodejs size={skillIconSize}/>
        }
    ],[])
    const skills2 = useMemo(()=>[
        {
            name:"Flutter",
            description:"Cross Platform.",
            icon: <TbBrandFlutter size={skillIconSize}/>
        },
        {
            name:"React Native",
            description:"Cross Platform.",
            icon: <TbBrandReactNative size={skillIconSize}/>
        },
        {
            name:"GCP",
            description:"Cloud Services.",
            icon: <TbCloud size={skillIconSize}/>
        },
        {
            name:"Linux",
            description:"Operating System.",
            icon: <AiOutlineLinux size={skillIconSize}/>
        },
    ],[])
      return (
        <div className={"gap-12 h-full w-full flex justify-start items-start p-5 md:pl-[20%] px-5 flex-col text-black"}>
            <div onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                <h1 className={"text-3xl"} style={{
                    fontFamily: "Playwrite MX",
                    fontWeight: 300,
                }}>
                    My top skills.
                </h1>
            </div>
            <div className={"flex gap-12"}>
                <div onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}
                     className={"md:text-xl text-lg max-w-2xl font-medium"}>
                    {skills.map((skill, i) => {
                        return <EachSkillCard key={i} {...skill}/>
                    })}
                </div>
                <div onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}
                     className={"md:text-xl text-lg max-w-2xl font-medium"}>
                    {skills2.map((skill, i) => {
                        return <EachSkillCard key={i} {...skill}/>
                    })}
                </div>
            </div>
        </div>
      );
}

function EachSkillCard({name, description, icon}) {
    return (
        <div className={"flex gap-4 mb-5 items-center"}>
            {icon}
            <div>
                <motion.h1
                    initial={{
                        opacity: 0,
                        y: 20
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: 0.5,
                            ease: [0.76, 0, 0.24, 1],
                        }
                    }}
                    className={"text-md"}>{name}</motion.h1>
                <motion.p
                    initial={{
                        opacity: 0,
                        y: 20
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: 0.5,
                            ease: [0.76, 0, 0.24, 1],
                            delay: 0.05
                        }
                    }}
                    className={"text-xs"}>{description}</motion.p>
           </div>
        </div>
    )
}

export default RightSkills;
