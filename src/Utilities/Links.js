import {FaInstagram, FaLinkedinIn} from "react-icons/fa";
import {FiGithub} from "react-icons/fi";

export const Social={
    Linkedin:"https://www.linkedin.com/in/ankit-kum-shah",
    Instagram:"https://www.instagram.com/ankit_kumar.cpp",
    Github:"https://github.com/Infinite-Null"
}
export const socials = [
    {
        name: "LinkedIn",
        link: Social.Linkedin,
        icon:FaLinkedinIn({size:20,color:"black"})
    },
    {
        name: "GitHub",
        link: Social.Github,
        icon: FiGithub({size:20,color:"black"})
    },
    {
        name: "Instagram",
        link: Social.Instagram,
        icon: FaInstagram({size:20,color:"black"})
    }
]
