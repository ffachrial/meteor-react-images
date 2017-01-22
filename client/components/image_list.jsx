// Create our image list component
// Import React
import React from 'react';
import ImageDetail from './image_detail';

const IMAGES = [
    { tittle: 'Pen', link: 'http://dummyimage.com/600x400' },
    { tittle: 'Pine Tree', link: 'http://dummyimage.com/600x400' },
    { tittle: 'Mug', link: 'http://dummyimage.com/600x400' }
];

// Create component
const ImageList = () => {
    const RenderedImages = IMAGES.map(function() {
        return (
            <ImageDetail />
        );
    });

    return (
        <ul>
            {RenderedImages}
        </ul>
    );
};

// Export component
export default ImageList;