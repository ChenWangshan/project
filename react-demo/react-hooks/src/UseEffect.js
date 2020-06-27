import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


function Index() {
    useEffect(() => {
        console.log("欢迎来到Index页面");
        return () => {
            // 解绑
            console.log("您离开了Index页面");
        }
    }, []);
    return <h2>首页</h2>
}

function List() {
    useEffect(() => {
        console.log("欢迎来到List页面");
        return () => {
            // 解绑
            console.log("您离开了List页面");
        }
    }, []);
    return <h2>列表页</h2>
}

function UseEffect() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log('useEffect');
        return () => {
            console.log("==========");
        }
    }, [count]);
    return (
        <div>
            <p>You clicked {count} times!</p>
            <button onClick={() => { setCount(count + 1) }}>Click me</button>
            <Router>
                <ul>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/list">列表</Link></li>
                </ul>
                <Route path="/" exact component={Index}></Route>
                <Route path="/list" component={List}></Route>
            </Router>
        </div>
    )
}

export default UseEffect;