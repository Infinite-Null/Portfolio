import Context from "./Context.jsx";
import {useState} from "react";
import {useCallback} from "react";


const ContextState = (props) => {
    const [Hovered, setHovered] = useState(false)
    const mouseEnter = useCallback(()=>{
        setHovered(true)
    },[])
    const mouseLeave = useCallback(()=>{
        setHovered(false)
    },[])
    return <Context.Provider value={{Hovered,mouseEnter, mouseLeave}}>
        {props.children}
    </Context.Provider>
}

export default ContextState
