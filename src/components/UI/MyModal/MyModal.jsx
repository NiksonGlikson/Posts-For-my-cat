import React from 'react';
import cl from './MyModal.module.css';

const MyModal = ({children, visible, setVisible}) => {

    const rootClasses = [cl.myModal]
    if(visible) {
        rootClasses.push(cl.active)
    }

    return (
        // окно закрывается на темную область
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            {/* надо предотвратить всплытие события */}
            <div className={cl.myModalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}

export default MyModal;
