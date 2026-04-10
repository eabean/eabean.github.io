import React, { useState } from "react";
import Title from "./Title";

const FORM_ID = "xsinbrqn06l";

function Contact() {
    const [result, setResult] = useState("");

    async function handleSubmit(event) {
        event.preventDefault();
        const forminit = new window.Forminit();
        const formData = new FormData(event.target);
        const { data, error } = await forminit.submit(FORM_ID, formData);

        if (error) {
            setResult(error.message);
            return;
        }

        setResult("Message sent successfully!");
        event.target.reset();
    }

    return (
        <div className="flex flex-col mt-20 mb-10 mx-auto">
            <div className="flex justify-center items-center">
                <form onSubmit={handleSubmit}
                    className="flex flex-col w-full md:w-7/12">
                        <a
                            href="https://www.linkedin.com/in/enid-au/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 mb-4 w-max text-stone-900 hover:text-stone-600 transition duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                            LinkedIn
                        </a>
                        <Title id="contact">Contact</Title>
                        <input
                            type="text"
                            name="fi-sender-fullName"
                            placeholder="Name"
                            required
                            className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
                            />
                        <input
                            type="email"
                            name="fi-sender-email"
                            placeholder="Email"
                            required
                            className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
                            />
                        <textarea
                            name="fi-text-message"
                            placeholder="Message"
                            rows="10"
                            required
                            className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none">
                        </textarea>
                        <button
                            type="submit"
                            className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-stone-900 border-2 border-stone-900 hover:bg-transparent hover:text-stone-900 transition duration-300">
                            Contact Me
                        </button>
                    </form>
            </div>
            {result && <p className="text-center mt-4">{result}</p>}
        </div>
    )
}

export default Contact;