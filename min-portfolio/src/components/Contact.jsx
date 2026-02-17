import React, { useState } from "react";

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
        <div className="flex flex-col mb-10 mx-auto">
            <div className="flex justify-center items-center">
                <form onSubmit={handleSubmit}
                    className="flex flex-col w-full md:w-7/12">
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