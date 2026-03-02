import React from "react";

function Intro() {
    return (
        <div className="flex items-center justify-center gap-10 pt-20 pb-6">
            <div className="w-32 h-32 md:w-64 md:h-64 rounded-full border-stone-900 bg-stone-200 flex-shrink-0 mb-6" />
            <div className="flex flex-col text-left">
                <h1 className="text-4xl md:text-3xl mb-1 md:mb-3 font-bold">Hi, I’m Enid.</h1>
                <p className="text-med max-w-xl mb-6">
                    I’m a <b>software engineer</b> working at an asset management firm with backend development experience in the financial markets domain.
                </p>
            </div>
        </div>
    )

}


export default Intro;