import img from '~/assets/images/images.js'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// import aaaa from '~/services/sendFile.js';
function Split() {
    const [fileName, setFileName] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        eventUploadFile();
    }, []);

    function eventUploadFile() {
        window.addEventListener("pageshow", function(event) {
            const form = document.querySelector('.formUpload_Container');
            const inputs = form.querySelectorAll('input');
            inputs.forEach(function(input) {
                input.value = '';
            });
        });

        const input = document.querySelector('.formUpload_input');
        const content_icon = document.querySelector('.content_upload_submit');


        input.addEventListener('change', async function() {
            const fileName = this.files[0].name;
            console.log(fileName);
            document.querySelector('.name-file').textContent = fileName;
            await wait();
        });
        async function wait() {
            const fileName = input.files[0].name;
            const file = input.files[0];
            const form = document.querySelector('.formUpload_Container');
            const formData = new FormData(); // Declare formData here
            formData.append('pdfFile', fileName); // Append data to formData
        
            if (fileName.length > 0) {
                content_icon.classList.remove('invisible');
            }
            setFileName(fileName);
            setIsVisible(fileName.length > 0);
            form.addEventListener('submit',(e)=>{
                e.preventDefault();
                handleFileUpload(file, formData);
            });
            // send request here
        }
    }
    async function handleFileUpload(file, formData) {
        try {
            formData.append('pdfFilePath', file);
            const response = await axios.post('http://localhost:8080/pdf-tools/pdf-split/upload', formData);
    
            const { pdfFilePath } = response.data;
            console.log('LOLLLLLLLLLLLLLLLLLLLLLLLLLL');
            // Điều hướng người dùng đến layout frontend Option
            navigate(`/pdf-tools/pdf-split/option?pdfFilePath=${pdfFilePath}`);
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    }

    return (
        <div className="mx-auto w-full px-12 xl:max-w-screen-2xl">
        <div className="flex flex-col w-full justify-start gap-6 min-w-96">
            <div className="flex justify-center items-center">
                <h1 className=" text-[42px] font-bold">Split PDF</h1>
            </div>
            <div className=" w-full min-h-80 h-auto flex">
                <label className=" block cursor-pointer w-full">
                <form className="formUpload_Container w-full h-full" action="" method="POST" encType="multipart/form-data">
                        <label className=" cursor-pointer">
                            <input className="formUpload_input absolute h-[1px] w-[1px] overflow-hidden" type="file" name="pdfFilePath" accept=".pdf" required  />
                        </label>
                        <div className=" h-full w-full relative rounded-lg bg-primary-home shadow-xl shadow-indigo-500/50 overflow-hidden">
                            <div className="flex justify-center absolute inset-3 border-dashed border-[1px] border-white rounded-[4px] bg-black bg-opacity-[0.1] items-center">
                                <div className=" flex flex-col justify-start gap-6 items-center">
                                    <div className="">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 60" className=" w-[96px] h-[60px]">
                                            <path className=" fill-white" d="m56.936.888 30.189 1.054 7.998 8.577-1.473 42.182a2.5 2.5 0 0 1-2.421 2.411h-.165L69 54.341V58a2 2 0 0 1-2 2H31a2 2 0 0 1-2-2v-3.731l-24.064.84a2.5 2.5 0 0 1-2.575-2.247l-.011-.164L.675 4.728a2.5 2.5 0 0 1 2.247-2.575l.164-.011 30.189-1.054 7.242 6.753-.149.159h13.817l.165-4.7A2.5 2.5 0 0 1 56.771.887zM59.999 9H31a1 1 0 0 0-.993.883L30 10v29h20a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H30v6a1 1 0 0 0 .883.993L31 59h36a1 1 0 0 0 .993-.883L68 58V17h-8zm-3.098-7.113a1.5 1.5 0 0 0-1.54 1.303l-.012.144L55.186 8H61l8 8v9.629a10.46 10.46 0 0 1 5.122-1.13c5.796.202 10.33 5.064 10.127 10.86s-5.064 10.329-10.86 10.126a10.5 10.5 0 0 1-4.39-1.13v8.986l22.1.772a1.5 1.5 0 0 0 1.54-1.303l.012-.144 1.428-40.975-7.493-.262-1-.035.297-8.496zm-24.799.24L3.121 3.142a1.5 1.5 0 0 0-1.445 1.407l-.002.145 1.675 47.97a1.5 1.5 0 0 0 1.407 1.445l.145.002 24.098-.841V52H28a1 1 0 0 1-1-1v-6.165l-7.405.258v.001l-1 .035-4.996.174-1 .036-.733-20.988L29 23.753V10a2 2 0 0 1 2-2h1.307zM59 50v1h-6v-1zm-26.685-8H30v7h1.303v-2.569h1.057c1.584 0 2.797-.717 2.797-2.269 0-1.627-1.213-2.162-2.842-2.162m6.19 0H36.54v7h2.034c2.18 0 3.506-1.21 3.506-3.532 0-2.312-1.326-3.468-3.573-3.468M48 42h-4.438v7h1.303v-2.922h2.674v-1.049h-2.674v-1.98H48zm-9.584 1.006c1.483 0 2.326.75 2.326 2.462 0 1.654-.777 2.46-2.151 2.522l-.175.004h-.573v-4.988zM59 45v1h-6v-1zm-26.787-2.005c1.09 0 1.663.29 1.663 1.167 0 .806-.467 1.223-1.431 1.27l-.187.004h-.955v-2.44zm36.814-16.244-.028.016v16.45a9.46 9.46 0 0 0 4.425 1.27c4.905.17 9.07-3.408 9.739-8.162l-9.442-.33.366-10.497a9.45 9.45 0 0 0-5.06 1.253M18.42 40.132l-4.997.175.14 3.996 4.997-.174zm8.593-.3-7.593.265.14 3.997 7.438-.26L27 40q0-.086.014-.168M59 40v1h-6v-1zm-40.753-4.865-4.997.175.14 3.997 4.996-.174zm10.752-.376-9.753.341.14 3.998 9.613-.336zM59 35v1H39v-1zm-40.928-4.862-4.997.175.14 3.997 4.997-.174zM29 29.756l-9.927.347.14 3.998L29 33.759zM59 30v1H39v-1zm-41.102-4.859-4.997.175.14 3.997 4.996-.174zm11.101-.387-10.102.353.14 3.997 9.962-.348zm32-15.34V16h6.585zm25.875-6.273-.254 7.289 7.29.254zM33.11 2.3l.2 5.7h5.911z"></path>
                                        </svg>
                                    </div>
                                    <div className=" w-52 h-14 bg-white rounded-md flex justify-between items-center hover:bg-gray-300 transition hover:duration-150 delay-75 ease-linear">
                                        <img className="w-[33px] h-[33px] m-3" src={img.file} />
                                        <h1 className="flex-1 pl-3 font-bold">CHOOSE FILES</h1>
                                    </div>
                                    <div className="flex flex-col items-center gap-4">
                                        <span className="name-file text-white text-center leading-[24px]">or drop files here</span>
                                        <button className="formUpload_submit content_upload_submit invisible" type="submit">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="w-8 h-8 fill-white hover:fill-black transition hover:duration-100 delay-75 ease-linear">
                                            <path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"></path>
                                        </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form> 
                </label>
            </div>
        </div>
    </div>
    );

}
export default Split;
   