import React from "react";
import HomeHeroes from "../Heroes/HomeHeroes";
import Features from "./About";
import UploadsStatic from "./UploadsStatic";
const HomeLayout = () => {
    return (
        <>
            <HomeHeroes />
            <UploadsStatic />
            <Features/>
        </>
    )
}
export default HomeLayout