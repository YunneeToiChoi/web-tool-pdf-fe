import { useContext,useState } from 'react';
import Login from '~/components/Layouts/PartialLayout/Login'
import SignUp from '~/components/Layouts/PartialLayout/SignUp'
import { ContextParent } from '../Header';
function FormBox( ) {
    let { open_login, setOpen_login, open_ovp, setOpen_ovp, open_signup, setOpen_signup } =useContext(ContextParent);
    
    let [overlayClicked, setOverlayClicked] = useState(false);

    const handleOverlayClick = () => {
        if (!overlayClicked) {
            setOpen_ovp(!open_ovp);
            setOverlayClicked(true);
            setTimeout(() => {
                setOpen_login(false);
                setOpen_signup(false);
                if (open_ovp) {
                    document.getElementById('Overlay_res').classList.add('hidden');
                }
                setOverlayClicked(false);
            }, 300);
        }
    };
    return(
        <>
        <div id='Overlay_res' className={` fixed z-30 hover:cursor-pointer transition duration-300 delay-100 ease-linear right-0 bottom-0 top-0 left-0 bg-black ${open_ovp ? 'bg-opacity-10':'bg-opacity-0'}`}  
                onClick={handleOverlayClick}></div>
                <div  className={` z-30 box_form_res fixed transition duration-300 delay-100 ease-linear right-0 w-5/12 max-xl:w-6/12 max-lg:11/12 max-md:w-full rounded-tl-xl rounded-bl-xl h-full flex flex-col bg-white shadow-2xl items-center ${open_ovp ? 'translate-x-0':'translate-x-full'}`} >
                <div className=" relative w-full px-40 max-2xl:px-20 max-[1060px]:px-12 max-[950px]:px-6 max-md:px-36 max-[690px]:px-28 max-[600px]:px-20 max-[480px]:px-4 py-10">
                <div className=" closed_res absolute top-4 right-4 cursor-pointer w-6 h-6 z-20 " 
                onClick={handleOverlayClick}>
                    <svg className=" hover:scale-105 ease-in-out delay-130 duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                </div>
                <div className="flex gap-5 max-w-56 items-center justify-between mb-[80px] max-xl:mb-[60px] max-lg:mb-[40px] max-md:mb-[20px]">
                    <div className="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
                        <path d="M20.547 37.289L28.301 41.766L49.998 54.293L79.246 37.295L49.796 20.291L20.547 37.289Z" fill="black"/>
                        <path d="M51.24 56.6339L51.353 64.9999H80V65.0869L80.342 39.6899L51.24 56.6339Z" fill="black"/>
                        <path d="M50 5.88599C22.386 5.88599 0 28.226 0 55.84C0 58.985 0.294 62 0.849 65H16V65.087L16.249 37.289C16.249 37.26 16.338 37.23 16.34 37.202C16.342 37.171 16.385 37.14 16.389 37.109C16.393 37.08 16.421 37.051 16.427 37.023C16.433 36.993 16.448 36.961 16.456 36.932C16.464 36.904 16.48 36.877 16.489 36.849C16.499 36.821 16.51 36.791 16.521 36.763C16.533 36.736 16.548 36.71 16.561 36.684C16.574 36.658 16.587 36.629 16.602 36.603C16.617 36.578 16.635 36.553 16.652 36.529C16.669 36.505 16.684 36.479 16.702 36.456C16.721 36.432 16.743 36.409 16.763 36.386C16.782 36.365 16.799 36.342 16.82 36.322C16.843 36.299 16.869 36.278 16.894 36.257C16.915 36.239 16.934 36.22 16.956 36.203C16.982 36.182 17.012 36.165 17.04 36.146C17.062 36.131 17.082 36.162 17.105 36.149L17.109 36.193L49.1 17.554C49.527 17.306 50.054 17.282 50.482 17.529L82.685 36.11C82.738 36.14 82.789 36.169 82.837 36.206C82.851 36.217 82.862 36.227 82.876 36.238C82.909 36.265 82.942 36.291 82.972 36.321C82.989 36.337 83.002 36.354 83.018 36.372C83.042 36.399 83.068 36.426 83.09 36.455C83.106 36.476 83.118 36.498 83.133 36.519C83.153 36.547 83.172 36.574 83.189 36.603C83.203 36.626 83.213 36.652 83.226 36.676C83.24 36.704 83.256 36.733 83.268 36.763C83.279 36.788 83.287 36.815 83.295 36.841C83.305 36.871 83.317 36.901 83.326 36.933C83.333 36.959 83.337 36.987 83.342 37.014C83.349 37.045 83.357 37.076 83.362 37.11C83.366 37.138 83.178 37.168 83.18 37.196C83.183 37.227 83 37.258 83 37.289V37.292V37.295L83.295 65H99.151C99.706 62 100 58.985 100 55.84C100 28.226 77.614 5.88599 50 5.88599Z" fill="black"/>
                        <path d="M42.09 52.996L19.094 39.631L19.096 65H48V65.087L48.321 56.68L42.09 52.996Z" fill="black"/>
                        <path d="M81.906 68.444C81.229 68.444 80.68 69.042 80.677 69.719C80.677 70.396 81.222 70.999 81.9 70.999C81.903 70.999 81.903 70.999 81.906 70.999C82.58 70.999 83.128 70.401 83.128 69.725C83.131 69.048 82.583 68.447 81.906 68.444Z" fill="black"/>
                        <path d="M81.891 73.072C81.57 73.072 81.251 73.201 81.025 73.43C80.797 73.657 80.667 73.972 80.667 74.297C80.667 74.618 80.798 74.934 81.025 75.16C81.252 75.389 81.57 75.521 81.891 75.521C82.212 75.521 82.529 75.389 82.758 75.16C82.985 74.933 83.116 74.618 83.116 74.297C83.116 73.972 82.984 73.656 82.758 73.43C82.528 73.201 82.212 73.072 81.891 73.072Z" fill="black"/>
                        <path d="M77.275 75.5619C76.689 75.9019 76.491 76.6519 76.831 77.2379C77.06 77.6269 77.471 77.8469 77.893 77.8469C78.101 77.8469 78.313 77.7909 78.505 77.6779C79.091 77.3379 79.289 76.5879 78.949 76.0029C78.61 75.4219 77.86 75.2229 77.275 75.5619Z" fill="black"/>
                        <path d="M73.2751 77.884C72.6891 78.224 72.4901 78.975 72.8341 79.56C73.0611 79.952 73.4711 80.169 73.8941 80.169C74.1021 80.169 74.3141 80.117 74.5061 80.004C75.0911 79.663 75.2901 78.913 74.9501 78.328C74.6101 77.743 73.8601 77.544 73.2751 77.884Z" fill="black"/>
                        <path d="M53.277 89.5081C52.692 89.8481 52.493 90.5951 52.833 91.1801C53.063 91.5721 53.474 91.7931 53.896 91.7931C54.104 91.7931 54.315 91.7371 54.508 91.6241C55.093 91.2841 55.292 90.5361 54.952 89.9511C54.612 89.3661 53.862 89.1681 53.277 89.5081Z" fill="black"/>
                        <path d="M57.277 87.183C56.692 87.523 56.493 88.274 56.833 88.859C57.063 89.248 57.474 89.468 57.896 89.468C58.104 89.468 58.316 89.412 58.508 89.302C59.093 88.962 59.292 88.212 58.952 87.627C58.612 87.042 57.862 86.843 57.277 87.183Z" fill="black"/>
                        <path d="M61.2769 84.858C60.6919 85.198 60.4929 85.948 60.8339 86.533C61.0609 86.926 61.4739 87.142 61.8939 87.142C62.1049 87.142 62.3169 87.09 62.5089 86.977C63.0939 86.637 63.2929 85.887 62.9529 85.301C62.6129 84.717 61.8619 84.519 61.2769 84.858Z" fill="black"/>
                        <path d="M69.274 80.209C68.693 80.549 68.494 81.299 68.834 81.884C69.061 82.277 69.471 82.493 69.894 82.493C70.102 82.493 70.314 82.441 70.509 82.328C71.094 81.988 71.29 81.237 70.95 80.653C70.61 80.067 69.859 79.868 69.274 80.209Z" fill="black"/>
                        <path d="M65.277 82.533C64.692 82.873 64.494 83.624 64.834 84.209C65.061 84.601 65.471 84.818 65.894 84.818C66.102 84.818 66.313 84.766 66.509 84.652C67.094 84.312 67.293 83.562 66.953 82.977C66.613 82.392 65.862 82.193 65.277 82.533Z" fill="black"/>
                        <path d="M49.938 77.7891C50.612 77.7891 51.161 78.3411 51.158 79.0171C51.161 78.3411 50.616 77.7891 49.938 77.7891Z" fill="black"/>
                        <path d="M49.911 87.0391C50.588 87.0421 51.134 87.5901 51.134 88.2671C51.137 87.5901 50.588 87.0421 49.911 87.0391Z" fill="black"/>
                        <path d="M48.8051 79.488C48.9891 79.927 49.4221 80.237 49.9301 80.239C49.4231 80.237 48.9901 79.927 48.8051 79.488Z" fill="black"/>
                        <path d="M48.684 88.261C48.685 87.923 48.823 87.616 49.044 87.396C48.821 87.616 48.684 87.922 48.684 88.261Z" fill="black"/>
                        <path d="M48.684 88.261C48.68 88.938 49.229 89.49 49.906 89.49C49.229 89.486 48.68 88.938 48.684 88.261Z" fill="black"/>
                        <path d="M48.735 69.759C48.732 70.436 49.28 70.987 49.957 70.987C49.28 70.983 48.735 70.436 48.735 69.759Z" fill="black"/>
                        <path d="M49.951 73.161C49.358 73.161 48.863 73.578 48.748 74.137C48.731 74.216 48.723 74.493 48.723 74.578C48.72 75.254 49.269 76 49.945 76H49.948C50.622 76 51.17 75.261 51.173 74.587C51.173 74.502 51.165 74.322 51.149 74.242C51.035 73.684 50.543 73.164 49.951 73.161Z" fill="black"/>
                        <path d="M49.9239 82.414C49.2469 82.411 48.6979 83.026 48.6949 83.704C48.6949 84.38 49.2409 84.9999 49.9179 84.9999H49.9209C50.5979 84.9999 51.1459 84.3879 51.1459 83.7099C51.1479 83.0319 50.6009 82.417 49.9239 82.414Z" fill="black"/>
                        <path d="M49.938 77.7891C49.854 77.7891 49.771 77.7971 49.691 77.8131C49.132 77.9241 48.71 78.4181 48.708 79.0071C48.708 79.1781 48.742 79.2191 48.805 79.3671C48.99 79.8081 49.423 80.0001 49.93 80.0001C49.933 80.0001 49.933 80.0001 49.933 80.0001C49.934 80.0001 49.935 80.0001 49.936 80.0001C50.526 80.0001 51.019 79.7001 51.133 79.1441C51.15 79.0641 51.158 79.0411 51.158 78.9571C51.161 78.2811 50.612 77.7891 49.938 77.7891Z" fill="black"/>
                        <path d="M49.963 68.536C49.286 68.533 48.738 69.088 48.735 69.765C48.735 70.442 49.28 71 49.957 71H49.96C50.638 71 51.183 70.448 51.186 69.771C51.188 69.094 50.641 68.539 49.963 68.536Z" fill="black"/>
                        <path d="M49.911 87.039C49.572 87.037 49.266 87.174 49.044 87.395C48.822 87.616 48.685 88.178 48.684 88.516C48.68 89.193 49.229 90 49.905 90C49.905 90 49.905 90 49.908 90C50.582 90 51.131 89.199 51.134 88.522C51.134 87.846 50.588 87.042 49.911 87.039Z" fill="black"/>
                        <path d="M49.894 91.667C49.572 91.667 49.256 91.796 49.03 92.025C48.801 92.252 48.672 92.567 48.672 92.891C48.672 93.213 48.801 93.529 49.03 93.755C49.257 93.984 49.572 94.113 49.894 94.113C50.218 94.113 50.534 93.984 50.76 93.755C50.989 93.528 51.121 93.213 51.121 92.891C51.121 92.567 50.989 92.251 50.76 92.025C50.533 91.796 50.218 91.667 49.894 91.667Z" fill="black"/>
                        <path d="M46.4811 89.504C45.8961 89.168 45.1461 89.366 44.8091 89.955C44.4721 90.54 44.6711 91.29 45.2561 91.627C45.4491 91.74 45.6601 91.793 45.8691 91.793C46.2911 91.793 46.7051 91.571 46.9311 91.18C47.2681 90.592 47.0691 89.845 46.4811 89.504Z" fill="black"/>
                        <path d="M26.3549 77.884C25.7699 77.547 25.0199 77.746 24.6829 78.334C24.3429 78.92 24.5449 79.67 25.1299 80.007C25.3229 80.117 25.5339 80.172 25.7419 80.172C26.1649 80.172 26.5749 79.951 26.8049 79.56C27.1419 78.972 26.9429 78.224 26.3549 77.884Z" fill="black"/>
                        <path d="M22.33 75.56C21.742 75.223 20.995 75.422 20.658 76.01C20.318 76.595 20.52 77.345 21.105 77.682C21.298 77.795 21.509 77.848 21.718 77.848C22.14 77.848 22.551 77.627 22.778 77.236C23.117 76.646 22.915 75.899 22.33 75.56Z" fill="black"/>
                        <path d="M38.432 84.858C37.844 84.518 37.097 84.719 36.757 85.304C36.42 85.89 36.622 86.64 37.207 86.977C37.4 87.09 37.611 87.142 37.816 87.142C38.242 87.142 38.652 86.922 38.879 86.53C39.219 85.945 39.017 85.195 38.432 84.858Z" fill="black"/>
                        <path d="M34.407 82.533C33.819 82.193 33.072 82.395 32.732 82.98C32.395 83.568 32.594 84.316 33.182 84.656C33.375 84.766 33.583 84.818 33.791 84.818C34.217 84.818 34.627 84.6 34.854 84.206C35.194 83.62 34.992 82.87 34.407 82.533Z" fill="black"/>
                        <path d="M42.457 87.18C41.872 86.843 41.122 87.042 40.785 87.63C40.445 88.215 40.647 88.966 41.232 89.302C41.425 89.415 41.636 89.468 41.844 89.468C42.267 89.468 42.677 89.247 42.907 88.855C43.244 88.267 43.044 87.52 42.457 87.18Z" fill="black"/>
                        <path d="M30.379 80.209C29.794 79.871 29.044 80.07 28.707 80.656C28.37 81.244 28.569 81.991 29.154 82.331C29.347 82.441 29.558 82.496 29.767 82.496C30.189 82.496 30.603 82.276 30.829 81.884C31.167 81.296 30.967 80.546 30.379 80.209Z" fill="black"/>
                        <path d="M17.693 73.072C17.368 73.072 17.053 73.204 16.826 73.43C16.597 73.659 16.468 73.975 16.468 74.297C16.468 74.618 16.597 74.934 16.826 75.163C17.053 75.39 17.368 75.521 17.693 75.521C18.015 75.521 18.33 75.389 18.56 75.163C18.787 74.934 18.918 74.618 18.918 74.297C18.918 73.975 18.786 73.659 18.56 73.43C18.33 73.204 18.015 73.072 17.693 73.072Z" fill="black"/>
                        <path d="M17.708 68.447C17.031 68.444 16.479 69.044 16.479 69.72C16.477 70.397 17.025 71 17.702 71C17.702 71 17.702 71 17.705 71C18.379 71 18.927 70.4 18.93 69.727C18.934 69.05 18.385 68.447 17.708 68.447Z" fill="black"/>
                        <path d="M97.318 67H2.37001C2.11601 67 1.91101 67.246 1.91101 67.5C1.91101 67.754 2.11601 68 2.37001 68H97.319C97.573 68 97.779 67.754 97.779 67.5C97.779 67.246 97.572 67 97.318 67Z" fill="black"/>
                    </svg>
                    </div>
                    <div className="">
                    <blockquote className=" gap-2 flex flex-nowrap text-2xl font-semibold italic text-center text-slate-900">
                        <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-black relative inline-block ">
                        <span className="relative text-white">Tools</span>
                        </span>
                        PDF
                    </blockquote>
                    </div>
                </div>
                <div className=" absolute top-0  right-[-30%] w-[120%] h-[120%] stroke-gray-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)]">
                    <svg viewBox="0 0 1026 1026" fill="none" aria-hidden="true" className="absolute inset-0 h-full w-full animate-spin-slow">
                    <path d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z" stroke="#D4D4D4" strokeOpacity="0.7"></path>
                    <path d="M513 1025C230.23 1025 1 795.77 1 513" stroke="url(#:S1:-gradient-1)" strokeLinecap="round"></path>
                    <defs>
                        <linearGradient id=":S1:-gradient-1" x1="1" y1="513" x2="1" y2="1025" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#06b6d4"></stop>
                        <stop offset="1" stopColor="#06b6d4" stopOpacity="0"></stop>
                        </linearGradient>
                    </defs>
                    </svg>
                    <svg viewBox="0 0 1026 1026" fill="none" aria-hidden="true" className="absolute inset-0 h-full w-full animate-spin-slow">
                    <path d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z" stroke="#D4D4D4" strokeOpacity="0.7"></path>
                    <path d="M913 513c0 220.914-179.086 400-400 400" stroke="url(#:S1:-gradient-2)" strokeLinecap="round"></path>
                    <defs>
                        <linearGradient id=":S1:-gradient-2" x1="913" y1="513" x2="913" y2="913" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#06b6d4"></stop>
                        <stop offset="1" stopColor="#06b6d4" stopOpacity="0"></stop>
                        </linearGradient>
                    </defs>
                    </svg>
                </div>
                {/* Login */}
                <Login></Login>

                 {/* SIGN-UP */}
                 <SignUp></SignUp>
                
                </div>
                </div>
    </>
    )
}
export default FormBox;