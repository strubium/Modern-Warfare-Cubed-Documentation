import React from 'react';
import DownloadButton from '@site/src/components/DownloadButton';

const AssetDisplay = ({imgSrc, name, fileType, downloadUrl}) => (
    <div className="asset-display">
        <img
            src={imgSrc}
            alt={name}
            style={{maxHeight: '10rem'}}
        />
        <p>Type: {fileType}</p>
        <DownloadButton
            url={downloadUrl}
            filename={`${name}${fileType.split(' ')[1].replace('(', '').replace(')', '')}`}
        >
            Download
        </DownloadButton>
    </div>
);

export default AssetDisplay;
