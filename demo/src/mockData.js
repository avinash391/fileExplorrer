
const mockData = {
    name: 'root',
    type: 'folder',
    children: [
        {
            name: 'Document',
            type: 'folder',
            children: [
                { name: 'file1.txt', type: 'file' },
                { name: 'file2.txt', type: 'file' },
            ],
        },
        {
            name: 'Images',
            type: 'folder',
            children: [
                { name: 'pic1.jpg', type: 'file' },
                { name: 'pic2.jpg', type: 'file' },
            ],
        },
    ],
};
export default mockData;