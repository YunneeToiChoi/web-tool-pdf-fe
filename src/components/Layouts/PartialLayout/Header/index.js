import React, { useState, useEffect } from 'react';
import Signup from '~/components/Layouts/PartialLayout/Signup';
function Header() {
    const [formOpen, setFormOpen] = useState(false);

    useEffect(() => {
        const formRes = document.querySelector('.signUp_form');
        const overlayRes = document.querySelector('.Overlay_res');
        const closedRes = document.querySelector('.closed_res');
        const btnRes = document.querySelector('.btn_res');
        const boxRes = document.querySelector('.box_form_res');

        const closeForm = () => {
            overlayRes.classList.remove('animate-fadeIn');
            formRes.classList.remove('inset-0');
            boxRes.classList.remove('animate-fadeInRight');
            overlayRes.classList.add('animate-fadeOut');
            boxRes.classList.add('animate-fadeOutRight');
            formRes.classList.add('hidden');
        };

        const openForm = () => {
            formRes.classList.remove('hidden');
            formRes.classList.add('inset-0');
            overlayRes.classList.add('animate-fadeIn');
            boxRes.classList.add('animate-fadeInRight');
            overlayRes.classList.remove('animate-fadeOut');
            boxRes.classList.remove('animate-fadeOutRight');
        };

        btnRes.addEventListener('click', openForm);
        overlayRes.addEventListener('click', closeForm);
        closedRes.addEventListener('click', closeForm);

        // Clean up event listeners
        return () => {
            btnRes.removeEventListener('click', openForm);
            overlayRes.removeEventListener('click', closeForm);
            closedRes.removeEventListener('click', closeForm);
        };
    }, []);

    return (
        <div className="relative w-full">
            <div  className="fixed right-0 left-0 pt-6 px-8 bg-white z-10">
                <div className="max-lg:hidden flex flex-col justify-center items-center">
                    <div className="flex justify-between w-full">
                        <div className="flex w-4/6 justify-between min-w-[600px] max-w-[700px]">
                            <a href="/" className="text-lg font-medium leading-6 text-gray-900 h-16 text-center content-center pl-1 pr-1 border-b-black border-b-2 transition">Tool split</a>
                            <a href="/" className="text-lg font-medium leading-6 text-gray-300 h-16 text-center content-center pl-1 pr-1 hover:border-gray800 hover:border-b-[1px] pb-[1px] hover:pb-0 transition hover:duration-150 delay-75 ease-in-out hover:text-black">Features</a>
                            <a href="/" className="text-lg font-medium leading-6 text-gray-300 h-16 text-center content-center pl-1 pr-1 hover:border-gray800 hover:border-b-[1px] pb-[1px] hover:pb-0 transition hover:duration-150 delay-75 ease-in-out hover:text-black">Marketplace</a>
                            <a href="/" className="text-lg font-medium leading-6 text-gray-300 h-16 text-center content-center pl-1 pr-1 hover:border-gray800 hover:border-b-[1px] pb-[1px] hover:pb-0 transition hover:duration-150 delay-75 ease-in-out hover:text-black">Company</a>
                        </div>
                        <div className=" w-52 flex justify-between items-center ml-10">
                            <button className="transition hover:duration-300 ease-in-out delay-75 bg-black  duration-300 text-white px-6 py-2 rounded-lg font-bold text-center hover:-translate-y-1 hover:scale-100 hover:shadow-lg">
                                Login
                            </button>
                            <button className="btn_res transition hover:duration-300 ease-in-out delay-75 bg-white hover:bg-[#F9F9F9] duration-300 text-black px-6 py-2 rounded-lg font-bold text-center hover:-translate-y-1 hover:scale-100 hover:shadow-lg">
                            sign up
                            </button>
                        </div>
                    </div>
                    <div className="border-b-[1px] w-full"></div>
                </div>
                <div className="hidden max-lg:flex justify-end fixed mt-8 left-0 right-0 hover:cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg"viewBox="0 0 215 215" fill="none" className="p-3 w-12 h-12 ring-slate-900/5 flex items-center justify-center rounded-full hover:bg-black group transition hover:duration-100 delay-75 ease-linear">
                <path d="M25.9398 107.358H186.977" stroke="black" stroke-width="17.893" stroke-linecap="round" stroke-linejoin="round" className=" group-hover:stroke-white transition group-hover:duration-100 delay-75 ease-linear"/>
                <path d="M79.6185 161.037L25.9396 107.358L79.6185 53.679" stroke="black" stroke-width="17.893" stroke-linecap="round" stroke-linejoin="round" className=" group-hover:stroke-white transition group-hover:duration-100 delay-75 ease-linear"/>
                </svg>
            </div>
        </div><Signup></Signup>
        </div>
    );
}

export default Header;