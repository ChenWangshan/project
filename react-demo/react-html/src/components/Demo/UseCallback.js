/** useCallback会在组件第一次渲染的时候执行一次，之后会在其依赖的变量发生变化的时候再次执行，useCallback返回缓存的函数 **/


import React, { useState, useCallback } from 'react';
 
const set = new Set();
 
function UseCakkback () {
    const [count, setCount] = useState(1);
    const [val, setVal] = useState('');
 
    const callback = useCallback(() => {
        console.log(count);
    }, [count]);
    set.add(callback);
 
    return <div>
        <h4>{count}</h4>
        <h4>{set.size}</h4>
        <div>
            <button onClick={() => setCount(count + 1)}>+</button>
            <input value={val} onChange={event => setVal(event.target.value)}/>
        </div>
    </div>;
}

export default UseCakkback;