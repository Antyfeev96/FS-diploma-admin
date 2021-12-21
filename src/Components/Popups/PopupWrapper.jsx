import React from 'react';

function PopupWrapper({ children }) {
    return (
        <div className="popup active">
            <div className="popup__container">
                <div className="popup__content">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default PopupWrapper;
