import React from 'react';
import Header from "../../../Components/Popups/Header";
import FormWrapper from "../../../Components/Popups/FormWrapper";

const MyComponent = () => {
    return (
        <div className="popup active">
            <div className="popup__container">
                <div className="popup__content">
                    <Header type="film"/>
                    <FormWrapper type="film"/>
                </div>
            </div>
        </div>
    );
};

export default MyComponent;
