import React from 'react';
import './DownloadButton.css'; // Import the CSS file

const DownloadButton = ({url, filename, children}) => {
    const downloadFile = async (url, filename) => {
        const response = await fetch(url);
        const blob = await response.blob();
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.setAttribute('download', filename);
        document.body.appendChild(link);
        link.click();
        link.remove();
    };

    return (
        <button className="download-button" onClick={() => downloadFile(url, filename)}>
            {children}
        </button>
    );
};

export default DownloadButton;
