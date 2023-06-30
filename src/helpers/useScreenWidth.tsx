import { useEffect, useState } from 'react';

export const useCheckScreenWidth = (breakPoint: number) => {
    const [currentStatus, setCurrentStatus] = useState<boolean | undefined>(window.innerWidth < breakPoint);

    useEffect(() => {
        const checker = () => {
            if (window.innerWidth < breakPoint) setCurrentStatus(true);
            else setCurrentStatus(false);
        };

        checker();

        window.addEventListener('resize', checker);

        return () => {
            window.removeEventListener('resize', checker);
        };
    }, [breakPoint]);

    return currentStatus;
};
