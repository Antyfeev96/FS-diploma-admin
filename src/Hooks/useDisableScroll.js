import { useEffect } from 'react';

export const useDisableScroll = (open) => {
    useEffect(() => {
        if (open) {
            console.log('hide scroll')
            document.body.style.overflow = 'hidden';
        } else {
            console.log('show scroll')
            document.body.style.overflow = 'unset';
        }
    }, [open]);
};