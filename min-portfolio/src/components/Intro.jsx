import React from "react";
import profilePhoto from "../assets/profile5.jpg";

function Intro() {
    return (
        <div className="flex items-center justify-center gap-10 pt-10 pb-6">
            <img src={profilePhoto} alt="Profile photo" className="w-32 h-32 md:w-64 md:h-64 rounded-full object-cover flex-shrink-0 mb-6" />
            <div className="flex flex-col text-left">
                <div className="relative group inline-block cursor-default mb-1 md:mb-3">
                    <h1 className="text-4xl md:text-3xl font-bold">Hi, I’m Enid.</h1>
                    <div className="absolute bottom-full left-0 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                        <div className="relative bg-stone-900 text-white text-sm font-normal px-4 py-2 rounded-xl whitespace-nowrap">
                            Nice to meet you! 👋
                            <div className="absolute top-full left-6 w-3 h-3 bg-stone-900 rotate-45 -translate-y-1.5" />
                        </div>
                    </div>
                </div>
                <p className="text-med max-w-xl mb-6">
                    I’m a <b>software engineer</b> working at an asset management firm with backend development experience in the financial markets domain.
                </p>
            </div>
        </div>
    )

}


export default Intro;