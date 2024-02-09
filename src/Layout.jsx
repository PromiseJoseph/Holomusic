import React, { useContext } from "react";
import './assets/css/main.css'
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect } from "react";
import UploadsLoader from "./components/api/UploadsLoader";
import { UploadContext } from "./components/context/UploadProvider";
const Layout = () => {
    const { data, setData,setStatus,status } = useContext(UploadContext)
    const url = "uploads"
    useEffect(() => {
        const fetchedData = UploadsLoader(url)
        fetchedData.then((res) => {
            setData(res.data.data)
            setStatus(res.data.status)
        })
        console.log(data,status)
    }, [url])
    console.log(data,status)
   
    return (
        <>
        
            <Header />
            <Outlet />
            <Footer/>
        
        </>

    )
}
export default Layout