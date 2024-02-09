import React from "react";
import UploadHeroes from "../Heroes/UploadHeroes";
import About from "../homelayout/About";
import Service from "./Service";
import Team from "./Team";

const AboutLayout = () => {

    return (
        <>
            <main id="main">
                <UploadHeroes section="About" />
                <About/>
                <Service/>
                <Team/>
            </main>

            
        </>
    )
}
export default AboutLayout