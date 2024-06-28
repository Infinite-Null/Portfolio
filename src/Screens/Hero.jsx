import Description from "../Components/Hero/Left/description.jsx";
import Image from "../Components/Hero/Right/Image.jsx";

function Hero() {
    return (
        <div id={"home"} className="grid grid-cols-1 lg:grid-cols-5">
            <div className="h-[100vh] bg-[#f9f9f9] lg:col-span-3 flex items-center justify-center">
                <Description/>
            </div>
            <div className="h-[100vh] bg-[#3e3e3e] lg:col-span-2 overflow-visible relative lg:flex hidden items-center">
                <Image/>
            </div>
        </div>
    );
}

export default Hero;
