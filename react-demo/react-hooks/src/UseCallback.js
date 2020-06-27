// 自定义hooks
import React,{ useState, useEffect, useCallback } from 'react'

function useWinSize () {
    const [ size,setSize ] = useState({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
    });

    const onResize = useCallback( ()=> {
        setSize({
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight,
        });
    });

    useEffect(() => {
        window.addEventListener("resize",onResize);
        return () => {
            window.removeEventListener("resize",onResize);
        }
    },[]);

    return size;
}

function UseCallback (){
    const size = useWinSize();
    return (
        <h3>页面size{size.width}*{size.height}</h3>
    )
}

export default UseCallback;






