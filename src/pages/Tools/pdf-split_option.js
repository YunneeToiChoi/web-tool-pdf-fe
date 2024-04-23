import React, { useState, useEffect } from 'react';
import PreviewsPDF from '~/pages/Tools/previewsPDF';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function PdfSplitOption() {
    const [basicDisabled, setBasicDisabled] = useState(false);
    const [smartDisabled, setSmartDisabled] = useState(false);
    const [indexPageBasic, setIndexPageBasic] = useState('');
    const [indexPageSmart, setIndexPageSmart] = useState('');
    const [filePath, setFilePath] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const pdfFilePath = urlParams.get('pdfFilePath');
        setFilePath(pdfFilePath);
        const loadFromLocalStorage = (id) => {
            return localStorage.getItem(id) === 'disabled';
        };

        setBasicDisabled(loadFromLocalStorage('indexPageBasic'));
        setSmartDisabled(loadFromLocalStorage('indexPageSmart'));
        
    }, []);
    const handleSubmit = (event) => {
        event.preventDefault(); // Chặn hành vi mặc định của form

        // Thu thập dữ liệu từ state và gửi tới backend
        axios.post('http://localhost:8080/pdf-tools/pdf-split/resolve', {
            indexPageBasic: indexPageBasic,
            indexPageSmart: indexPageSmart,
            filePath: filePath
        })
        .then(response => {
            // Xử lý phản hồi từ backend (nếu cần)
            console.log(response.data);
            const filePathToDownload = response.data;
            navigate(`/pdf-tools/pdf-split/download?file=${filePathToDownload}`);
        })
        .catch(error => {
            // Xử lý lỗi (nếu có)
            console.error('Error:', error);
        });
    };
    const saveToLocalStorage = (id, disabled) => {
        localStorage.setItem(id, disabled ? 'disabled' : 'enabled');
    };

    const toggleOption = (option) => {
        if (option === 'basic') {
            setBasicDisabled((prevDisabled) => !prevDisabled);
            saveToLocalStorage('indexPageBasic', !basicDisabled);
        } else if (option === 'smart') {
            setSmartDisabled((prevDisabled) => !prevDisabled);
            saveToLocalStorage('indexPageSmart', !smartDisabled);
        }
    };
    
    return (
        <div className="mt-4 relative w-full flex justify-center">
            <div className="YouShouldDeleteThisBlock mb-80"><PreviewsPDF/></div>
            <div className="fixed bottom-10 max-w-7xl z-10 bg-indigo-500 hover:shadow-xl hover:shadow-indigo-500/50 transition hover:duration-150 delay-150 ease-in-out rounded-lg px-9 ">
                <form className="w-full mx-auto h-full flex items-center py-5" onSubmit={handleSubmit} method="POST">
                    <input type="hidden" name="pdfFilePath" id="pdfFilePath" value="{{pdfFilePath}}"/>
                    <div className="flex w-full justify-around gap-10 max-lg:flex-col max-lg:items-center">
                        <div className="flex w-80 justify-evenly">
                            <label className="hover:cursor-pointer text-slate-700 has-[:checked]:ring-slate-900 has-[:checked]:text-white has-[:checked]:bg-slate-900 flex items-center gap-6 rounded-lg p-4 ring-1 ring-transparent hover:bg-slate-100 bg-white ">
                                <p>Basic</p>
                                <input  name="option-checked" value="basic" type="checkbox" className="hover:cursor-pointer box-content h-1.5 w-1.5 appearance-none rounded-full border-[5px] border-white bg-white bg-clip-padding outline-none ring-1 ring-gray-950/10 checked:border-slate-900 checked:ring-white" onChange={() => toggleOption('basic')} checked={!basicDisabled} />
                            </label>
                            <label  className="hover:cursor-pointer text-slate-700 has-[:checked]:ring-slate-900 has-[:checked]:text-white has-[:checked]:bg-slate-900 flex items-center gap-6 rounded-lg p-4 ring-1 ring-transparent hover:bg-slate-100 bg-white">
                                <p>Smart</p>
                                <input  name="option-checked" value="smart" type="checkbox" className="hover:cursor-pointer box-content h-1.5 w-1.5 appearance-none rounded-full border-[5px] border-white bg-white bg-clip-padding outline-none ring-1 ring-gray-950/10 checked:border-slate-900 checked:ring-white" onChange={() => toggleOption('smart')} checked={!smartDisabled} />
                            </label>
                        </div>
                        <div className="flex flex-1 gap-3 justify-center items-center">
                            <div  className=" flex flex-col items-center gap-3 w-full max-lg:flex-col max-lg:items-center">
                                <input disabled={basicDisabled} id="indexPageBasic" value={indexPageBasic}  onChange={(e) => setIndexPageBasic(e.target.value)} type="text" name="indexPageBasic" className="disabled:bg-slate-200 disabled:ring-slate-400 disabled:ring-1 disabled:placeholder:text-gray-600 disabled:cursor-not-allowed min-w-40 focus:outline-none h-8 formUpload_inputIndexPage w-full rounded-md border-0 py-1.5 pl-1 pr-1 text-pink-500 ring-2 ring-inset ring-gray-300 placeholder:text-pink-500 focus:ring-2 focus:ring-inset focus:ring-pink-500 sm:text-sm sm:leading-6" placeholder="Basic"/>
                                <span className="min-w-32 font-normal text-gray-300">EX: 8 or 1,3,5,7</span>
                            </div>
                            <div  className="flex flex-col items-center gap-3 w-full max-lg:flex-col max-lg:items-center">
                                <input disabled={smartDisabled} id="indexPageSmart" value={indexPageSmart}  onChange={(e) => setIndexPageSmart(e.target.value)} type="text" name="indexPageSmart" className="disabled:bg-slate-200 disabled:ring-slate-400 disabled:ring-1 disabled:placeholder:text-gray-600 disabled:cursor-not-allowed min-w-40 focus:outline-none h-8 formUpload_inputIndexPage w-full rounded-md border-0 py-1.5 pl-1 pr-1 text-pink-500 ring-2 ring-inset ring-gray-300 placeholder:text-pink-500 focus:ring-2 focus:ring-inset focus:ring-pink-500 sm:text-sm sm:leading-6" placeholder="Smart"/>
                                <span className="min-w-32 font-normal text-gray-300">EX: 1={`>`}4</span>
                            </div>
                        </div>
                        <div className="box-btn_upload w-80 flex justify-center items-center">
                            <button className="formUpload_submit transition hover:duration-300 ease-in-out delay-75 bg-white hover:bg-[#F9F9F9] duration-300 text-black px-16 py-2 rounded-lg font-bold text-center hover:-translate-y-1 hover:scale-100 hover:shadow-lg hover:bg-black hover:text-white" type="submit">
                                Finish
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default PdfSplitOption;
