import mockData from './mockData';
import DirectoryTree from './DirectoryTree';
import FileList from './FileList';
import './App.css';
import { useState } from 'react';
import FileOperations from './FileOperations';

function App() {
  const [fileSystem, setFileSystem] = useState(mockData);
  const [parentFolder2, setParentFolder] = useState(null);
  const createFolder = (parentFolder) => {
    if (parentFolder) {
      const newFolder = {
        name: 'New Folder',
        type: 'folder',
        children: [],
      };
      parentFolder.children.push(newFolder);
      setFileSystem({ ...fileSystem });
    } else {
      console.error('Parent folder not found');
      // Handle the error state here, such as displaying an error message
    }
  };

  const renameFile = (filetoRename, newname) => {
    if (parentFolder) {
      filetoRename.name = newname;
      setFileSystem({ ...fileSystem });
    } else {
      console.error('Parent folder not found. Cannot rename the file.');
      // Handle the error state here, such as displaying an error message
    }
  };


  const deleteFile = (parent, fileToDelete) => {
    const index = parent.children.indexOf(fileToDelete);
    parent.children.splice(index, 1);
    setFileSystem({ ...fileSystem });
    setParentFolder(parent); // Update the parentFolder state here
  };

  const selectedFile = fileSystem.children[0].children[0]; // Selecting the first file inside the first folder
  const parentFolder = fileSystem.children[0];// Replace with the parent folder of the selected file

  return (
    <>
      <div className="App">
        <div className='sidebar'>
          <DirectoryTree data={fileSystem} setFileSystemData={fileSystem} />
        </div>
          
        <div className="content">
          <FileList files={fileSystem.children} />
        </div>
        <FileOperations
          onRename={() => renameFile(selectedFile, 'New File')}
          onDelete={() => deleteFile(parentFolder, selectedFile)}
          onCreateFolder={() => createFolder(parentFolder)}
          selectedFile={selectedFile}
        />
      </div>
    </>
  );
}

export default App;
