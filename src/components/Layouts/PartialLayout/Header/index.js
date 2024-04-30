import React, { createContext, useState, useEffect } from 'react';
import FormBox from '~/components/Layouts/PartialLayout/FormBox'

export let ContextParent=createContext();
function Header() {

    let [open_login, setOpen_login] = useState(false);
    let [open_ovp, setOpen_ovp] = useState(false);
    let [open_signup, setOpen_signup] = useState(false);
    let [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Kiểm tra xem có thông tin đăng nhập trong Local Storage không
        const token = localStorage.getItem('token');
        if (token) {
            // Có thông tin đăng nhập, cập nhật trạng thái đăng nhập
            setIsLoggedIn(true);
        }
    }, []);

    const handleLogout = () => {
        // Xóa token khỏi Local Storage
        localStorage.removeItem('token');
        // Cập nhật trạng thái đăng nhập
        setIsLoggedIn(false);
    };

    return (
        <ContextParent.Provider value={{ open_login, setOpen_login, open_ovp, setOpen_ovp, open_signup, setOpen_signup }}>
            <div className="relative w-full">
                <div  className="fixed right-0 left-0 pt-6 px-8 bg-white z-10">
                    <div className="max-lg:hidden flex flex-col justify-center items-center">
                        <div className="flex justify-between w-full">
                            <div className="flex w-4/6 justify-between min-w-[600px] max-w-[700px]">
                                <a href="/" className="text-lg font-medium leading-6 text-gray-900 h-16 text-center content-center pl-1 pr-1 border-b-black border-b-2 transition">Tool split</a>
                                <ItemHeader linkTitle={"/"} Title={"Features"}/>
                                <ItemHeader linkTitle={"/"} Title={"Marketplace"}/>
                                <ItemHeader linkTitle={"/"} Title={"Company"}/>
                            </div>
                            <div className=" w-52 flex justify-between items-center ml-10">
                                {isLoggedIn ? (
                                    <div className=" w-52 flex justify-between items-center ml-10">
                                        <button className="transition hover:duration-300 ease-in-out delay-75 bg-black  duration-300 text-white px-6 py-2 rounded-lg font-bold text-center hover:-translate-y-1 hover:scale-100 hover:shadow-lg" onClick={handleLogout}>
                                            Logout
                                        </button>
                                    </div>
                                ) : (
                                    <div className=" w-52 flex justify-between items-center ml-10">
                                        <button className="transition hover:duration-300 ease-in-out delay-75 bg-black  duration-300 text-white px-6 py-2 rounded-lg font-bold text-center hover:-translate-y-1 hover:scale-100 hover:shadow-lg" onClick={()=>{setOpen_ovp(!open_ovp);setOpen_login(!open_login)}}>
                                            Login
                                        </button>
                                        <button className="btn_res transition hover:duration-300 ease-in-out delay-75 bg-white hover:bg-[#F9F9F9] duration-300 text-black px-6 py-2 rounded-lg font-bold text-center hover:-translate-y-1 hover:scale-100 hover:shadow-lg" onClick={()=>{setOpen_ovp(!open_ovp);setOpen_signup(!open_signup)}}>
                                            Sign up
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="border-b-[1px] w-full"></div>
                    </div>
                    <div className="hidden max-lg:flex justify-end fixed mt-8 left-0 right-0 hover:cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg"viewBox="0 0 215 215" fill="none" className="p-3 w-12 h-12 ring-slate-900/5 flex items-center justify-center rounded-full hover:bg-black group transition hover:duration-100 delay-75 ease-linear">
                    <path d="M25.9398 107.358H186.977" stroke="black" strokeWidth="17.893" strokeLinecap="round" strokeLinejoin="round" className=" group-hover:stroke-white transition group-hover:duration-100 delay-75 ease-linear"/>
                    <path d="M79.6185 161.037L25.9396 107.358L79.6185 53.679" stroke="black" strokeWidth="17.893" strokeLinecap="round" strokeLinejoin="round" className=" group-hover:stroke-white transition group-hover:duration-100 delay-75 ease-linear"/>
                    </svg>
                </div>
                </div>
            </div>
            <FormBox></FormBox>
        </ContextParent.Provider>
        
    );
}

function ItemHeader(props)
{
    return(
        <a href={props.linkTitle} className="text-lg font-medium leading-6 text-gray-300 h-16 text-center content-center pl-1 pr-1 hover:border-gray800 hover:border-b-[1px] pb-[1px] hover:pb-0 transition hover:duration-150 delay-75 ease-in-out hover:text-black">{props.Title}</a>
    )
}

export default Header;