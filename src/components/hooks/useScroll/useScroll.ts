import { useEffect, useState } from "react"

export const useScroll = (px: number = 10): boolean => {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = (): void => {
            setIsScrolled(window.scrollY > px)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)

    }, [px])

    return isScrolled;
}