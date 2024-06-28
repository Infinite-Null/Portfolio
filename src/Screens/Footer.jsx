import Context from "../Context/Context.jsx";
import {useContext} from "react";
import {Social, socials} from "../Utilities/Links.js";
import EachSocialCard from "../Components/Hero/Left/EachSocialCard.jsx";

function Footer() {
    const {mouseEnter, mouseLeave} = useContext(Context)
    return (
    <footer id={"contact"} className="bg-[#3e3e3e] text-white">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2">
                <div
                    className="border-b border-gray-100 py-8 lg:order-last lg:border-b-0 lg:border-s lg:py-16 lg:ps-16"
                >
                    <div className="block text-white lg:hidden">
                        <h2 className="text-3xl" style={{
                            fontFamily: "Playwrite MX",
                            fontWeight: 300,
                        }}>
                            lets talk!
                        </h2>
                    </div>

                    <div className="mt-8 space-y-4 lg:mt-0">
                            <div
                                onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}
                                className="hidden text-white lg:block text-3xl" style={{
                                fontFamily: "Playwrite MX",
                                fontWeight: 300,
                            }}>
                                lets talk!
                            </div>

                        <form className="mt-6 w-full">
                            {/*TODO: Integrate Email Api*/}
                            <input
                                onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}
                                required={true}
                                id="UserEmail"
                                placeholder="Your Name"
                                className="w-full border-2 border-white rounded-full text-md p-5 bg-transparent"
                            />
                            <input
                                onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}
                                type="email"
                                required={true}
                                id="UserEmail"
                                placeholder="Your Email"
                                className="w-full mt-4 border-2 border-white rounded-full text-md p-5 bg-transparent"
                            />
                            <input
                                onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}
                                required={true}
                                id="UserEmail"
                                placeholder="Your message"
                                className="w-full mt-4 border-2 border-white rounded-full text-md p-5 bg-transparent"
                            />
                            <div className={"h-5"}/>
                            <button
                                onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}
                                className="mt-5 w-full rounded-full bg-gray-200 px-8 py-5 text-sm font-bold uppercase tracking-wide text-black transition-none hover:bg-white sm:mt-0 sm:w-auto sm:shrink-0"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

                <div className="py-8 lg:py-16 lg:pe-16">
                    <div
                        onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}
                        className="hidden text-white lg:block text-2xl" style={{
                        fontFamily: "Playwrite MX",
                        fontWeight: 300,
                    }}>
                    Connect With Me.
                    </div>

                    <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
                        {socials.map((social, index) => {
                            return <EachSocialCard key={index} icon={social.icon} link={social.link} index={index}/>
                        })}
                    </div>

                    <div className="mt-8 border-t border-gray-100 pt-8">
                        <ul className="flex flex-wrap gap-4 text-xs">
                            <li>
                                <div className="text-gray-500 transition hover:opacity-75"> Hard Work </div>
                            </li>

                            <li>
                                <div className="text-gray-500 transition hover:opacity-75"> Consistency </div>
                            </li>

                            <li>
                                <div className="text-gray-500 transition hover:opacity-75"> Dedication </div>
                            </li>
                        </ul>

                        <p className="mt-8 text-xs text-gray-500">&copy; Is my way of work</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
);
}

export default Footer;
