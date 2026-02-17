import React from "react";

function Footer() {
    return (
        <div className="py-5 text-center text-sm text-stone-400 dark:text-stone-500">
            <p>{new Date().getFullYear()} Enid's Portfolio</p>
        </div>
    )
}


export default Footer;