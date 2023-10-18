import React from 'react'
const FileList = ({ files }) => {
    return (
        <ul>
            {files.map((file, index) => (
                <li key={index}>{file.name}</li>
            ))}
        </ul>
    );
};
export default FileList;