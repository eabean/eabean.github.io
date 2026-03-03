import React from "react";

function TimelineItem({ year, title, duration, details, skills, place }) {
    return (
           <ol className="flex flex-col md:flex-row relative border-l border-stone-200 dark:border-stone-700 px-4">
         <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-stone-900 dark:bg-stone-700" />
            <div className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
               <span className="inline-block px-2 py-1 font-semibold text-white dark:text-stone-900 bg-stone-900 dark:bg-white rounded-md">
                  {year}
               </span>
               <h3 className="relative group text-lg font-semibold text-stone-900 dark:text-white cursor-default">
                  {title}
                  {place && (
                     <span className="absolute bottom-full left-0 mb-1 px-2 py-1 text-xs font-normal text-white bg-stone-800 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                        {place}
                     </span>
                  )}
               </h3>
               <span className="my-1 text-sm font-normal leading-none text-stone-400 dark:text-stone-500">
                  {duration}
               </span>
            </div>
            <div className="my-2 text-base font-normal text-stone-700 dark:text-stone-400">
               {details}
            </div>
            {skills && (
               <div className="mt-1 text-sm font-normal text-stone-400 dark:text-stone-500">
                  {skills}
               </div>
            )}
         </li>
      </ol>
    )

}


export default TimelineItem;