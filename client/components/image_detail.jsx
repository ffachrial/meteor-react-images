// Import React
import React from 'react';

// Create Image Detail Component
const ImageDetail = (props) => {
    // props.image => this is the image object
    // props.image.title
    // props.image.link

    return (
        <li>
            <img src={props.image.link} />
            {props.image.title}
        </li>
    );
};

// Export Components
export default ImageDetail;