import { useState, useCallback } from 'react'

export const useOpenHeader = () => {
    const [ isActive, setActive ] = useState(true);

    const toggleActive = useCallback(() => {
        setActive(!isActive)
    }, [isActive])

    return { isActive, toggleActive }
}