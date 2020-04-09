import React, { Component } from 'react';
import { Spin } from 'antd';

import style from "./Loading.module.scss";

class Loading extends Component {
    render() {
        return (
            <div className={style.loading}>
                <Spin />
            </div>
        );
    }
}

export default Loading;