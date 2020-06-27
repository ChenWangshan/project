import React,{ useState, useEffect, useRef } from 'react';

function UseRef () {
    const inputEl = useRef(null);
    const onButtonClick = () => {
        // 设置input值
        inputEl.current.value = "hello react-hooks";
        console.log('inputEl', inputEl);

    }

    const[ text,setText ] = useState("useRef");
    // 保存变量
    const textRef = useRef();

    useEffect(() => {
        textRef.current = text;
        console.log('textRef.current', textRef.current);
    });

    return (
        <>
            <input ref={inputEl} type="text" />
            <button onClick={onButtonClick}>在input上边展示文字</button>
            <br />
            <br />
            <input value={text} onChange={(e) => {setText(e.target.value)}}/>
        </>
    )
}

export default UseRef;