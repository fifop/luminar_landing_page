import React from 'react';
import './ImageComponent.css';

function ImageComponent() {
    return (
        <div className="image-container">
            <div className="image-wrapper">
                <div className="text">סדנאות לאירוע חברה- אנחנו מגיעים אליכם ישר למשרד!</div>
                <img src="images\2.jpg" alt="תמונה 1" />
            </div>
            <div className="image-wrapper">
                <div className="text">בואו להיות מיקסולוגים ליום אחד!סדנאות פרטיות</div>
                <img src="images\1.jpg" alt="תמונה 2" />
            </div>
            <div className="image-wrapper">
                <div className="text">סדנאות פרטיות המשלבות מנוץ שף פרטיות!</div>
                <img src="images\3.jpg" alt="תמונה 3" />
            </div>
        </div>
    );
}

export default ImageComponent;
