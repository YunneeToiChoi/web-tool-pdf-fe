import React from 'react';
import img from '~/assets/images/images.js'
function PreviewsPDF() {
    const renderImages = () => {
        const images = [];
        for (let i = 0; i < 20; i++) {
            images.push(
                    <div className="">
                        <img className="  border-[1px] border-gray-300 " src={img.testPreviewPDF} alt=""/>
                    </div>
            );
        }
        return images;
    };
    return (
        <div className=" grid-cols-8 max-2xl:grid-cols-7 max-xl:grid-cols-5 max-lg:grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 grid gap-4">
            {renderImages()}
        </div>
    );
}


export default PreviewsPDF;
