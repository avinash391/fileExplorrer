import React from 'react'
const FileOperations = ({ onRename, onDelete, onCreateFolder, selectedFile }) => {
    return (

        <div>
        
        <button onClick={onRename}>Rename</button>
        <button onClick={onDelete}>Delete</button>
        <button onClick={onCreateFolder}>CreateFolder</button>
        
        </div>


    )
    

}

export default FileOperations