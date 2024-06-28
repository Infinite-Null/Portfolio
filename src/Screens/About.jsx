import LeftAbout from "../Components/About/Left.jsx";
import RightSkills from "../Components/About/Right.jsx";

function About() {
    return (
        <div id={"about"} className="grid grid-cols-1 lg:grid-cols-5">
            <div className="bg-[#3e3e3e] lg:col-span-3 flex items-center justify-center py-36">
                <LeftAbout />
            </div>
            <div className="bg-[#f9f9f9] lg:col-span-2 overflow-visible  justify-center flex items-center lg:py-36 py-10">
                <RightSkills/>
            </div>
        </div>
    );
}

export default About;
