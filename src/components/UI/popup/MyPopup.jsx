import React from 'react';
import cl from './MyPopup.module.css';

const MyPopup = ({children, visible, setVisible}) => {

    const rootClasses = [cl.MyPopup]
    if(visible) {
        rootClasses.push(cl.active);
    }

    return (
        <div className={rootClasses.join(' ')}>
            <div className={cl.myPopupContent}>
                {children}
            </div>
        </div>
    );
}

export default MyPopup;
