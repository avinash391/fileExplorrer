import React, { useState } from 'react';
const DirectoryTree= ({data ,setFileSystemData})=>{
const [expended,setexpended] = useState(false);
const toggleExpansion=()=>{
    setexpended(!expended)
}



    return (
<>
        <div className='main-toggle-dv'>
<span onClick={toggleExpansion} className='toggle-cls'>
    {expended ? '↓':'→'} {data.name}
</span>

{
    expended && (
        <ul>
        {data.children.map((item, index) => (
            <li key={`${item.name}-${index}`}>
                {item.type === 'folder' ? (
                    <DirectoryTree data={item} setFileSystemData={setFileSystemData}/>
                ) : (
                    item.name
                )}
            </li>
        ))}
    </ul>
    )
}
        </div>

        
</>
    );
}

export default DirectoryTree;