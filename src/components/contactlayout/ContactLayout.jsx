import React from "react";
import UploadHeroes from "../Heroes/UploadHeroes";
import Contact from "./Contact";
const ContactLayout = () => {
    return (
        <>
            <main id="main">
                <UploadHeroes section="Contact" />
                <Contact/>
            </main>
        </>
    );
}
export default ContactLayout