import { useEffect, useState } from "react"

export const useScroll = (px = 10) => {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > px)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)

    }, [px])

    return isScrolled;
}