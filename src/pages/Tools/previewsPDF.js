import React, { useEffect, useState } from 'react';

function PreviewsPDF() {
    // Get query file path 
    const urlParams = new URLSearchParams(window.location.search);
    const pdfFilePath = urlParams.get('pdfFilePath');

    // State to store page contents
    const [pagesContent, setPagesContent] = useState([]);

    useEffect(() => {
        // Fetch PDF pages content when component mounts
        const fetchPagesContent = async () => {
            try {
                const response = await fetch(`http://localhost:8080/pdf-tools/pdf-preview-all-pages?pdfFilePath=${encodeURIComponent(pdfFilePath)}`);
                const data = await response.json();
                setPagesContent(data.pagesContent);
            } catch (error) {
                console.error('Error fetching PDF pages content:', error);
            }
        };
        
        fetchPagesContent();
    }, [pdfFilePath]); // Fetch content when pdfFilePath changes

    return (
        <div className="grid grid-cols-1 gap-4">
            {/* {pagesContent.length > 0 && pagesContent.map((pageContent, index) => (
                <iframe key={index} src={URL.createObjectURL(new Blob([pageContent], { type: 'application/pdf' }))} title={`Page ${index + 1}`} />
            ))} */}
        </div>
    );
}

export default PreviewsPDF;
