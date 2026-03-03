import React from "react";

function Portfolio({title, imgUrl, stack, link}) {
    return (
        <a href={link || undefined} target={link ? "_blank" : undefined} rel="noopener noreferrer">
        <div class="border-4 border-stone-900 rounded-md overflow-hidden shadow-none hover:shadow-[0_0_20px_5px_rgba(0,0,0,0.15)] hover:-translate-y-1 transition-all duration-300">
            <div className="w-full h-40 md:h-52 p-3 flex items-center justify-center">
                <img src={imgUrl}
                    alt="portfolio"
                    className="max-h-full max-w-full object-contain cursor-pointer"
                />
            </div>
            <div className="w-full p-4">
                <h3 className="text-lg md:text-xl mb-2 md:mn-3 font-semibold h-14 line-clamp-2">
                    {title}
                </h3>
                <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
                    {stack.map(item => 
                        <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 rounded-md">
                            {item}
                        </span>
                    )}
                </p>
            </div>
        </div>
        </a>
    )

}


export default Portfolio;