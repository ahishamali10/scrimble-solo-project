import {useEffect, useRef, useState} from "react";

const UseToggle = ({onToggle, duration = 500}) => {
    const [on, setOn] = useState(false)
    const firstRender = useRef(true);

    const toggle = () => {
        setOn(prev => !prev)
    }

    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false;
        } else {
            onToggle();
        }
        let timeout;
        if (on) {
            timeout = setTimeout(() => {
                setOn(false)
            }, duration)
        }

        return () => clearTimeout(timeout)

    }, [on]);

    return [on, toggle]
};

export default UseToggle;