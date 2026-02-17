import React from "react";

function Title({ children, id }) {
    return (
        <h1 id={id && id} className="text-2xl md:text-2xl font-bold mb-6">
            {children}
        </h1>
    )
}


export default Title;