import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { fireEvent } from '@testing-library/react';

function DownloadPage()
{
    const location = useLocation();
    const [filePath, setFilePath] = useState('');

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const path = searchParams.get('file');
        setFilePath(path);
    }, [location]);

    const handleRequestfile = (filePath) => {
        console.log(filePath);
        axios.post('http://localhost:8080/pdf-tools/pdf-split/download/agree', {
            filePath: filePath,
        }, {
            responseType: 'blob' // Xác định kiểu dữ liệu trả về là blob
        })
        .then(response => {
            // Xử lý phản hồi từ backend
            const blob = new Blob([response.data], { type: 'application/pdf' });
            const downloadUrl = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = downloadUrl;
            link.download = 'downloaded_file.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        })
        .catch(error => {
            // Xử lý lỗi
            console.error('Error:', error);
        });
    };
    

    const handleSubmit = (e) => {
        e.preventDefault();
        handleRequestfile(filePath);
    };

    return(
        <div className="m-auto mt-32">
            <label className=" block cursor-pointer w-full h-full">
                    <form className="formContainer w-full h-full" onSubmit={handleSubmit} method="POST">
                        <label className=" cursor-pointer w-full h-full">
                            <input type="hidden" className="absolute h-[1px] w-[1px] overflow-hidden" name="file" value="{{pdfFilePathWithExtension}}"/>
                            <button className=" gap-8 flex items-center flex-col text-center py-12 px-36 border-dashed border-[2px] border-gray-300 hover:border-gray-500 rounded-lg w-full h-full group transition hover:duration-100 delay-100 ease-linear" type="submit">
                                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 640 512">
                                    <path className=" fill-gray-300 group-hover:fill-gray-600 transition group-hover:duration-100 delay-100 ease-linear" d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-167l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39V184c0-13.3-10.7-24-24-24s-24 10.7-24 24V318.1l-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z"/>
                                </svg>
                                <span className=" font-medium text-3xl text-gray-300 group-hover:text-gray-600 transition group-hover:duration-100 delay-100 ease-linear">
                                    Download File
                                </span>
                            </button>
                        </label>
                    </form>
            </label>
        </div>
    )
}
export default DownloadPage;