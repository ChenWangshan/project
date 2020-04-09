import React, { Component } from 'react';

const { FORBIDDEN_URL } = window.TDT_CONFIG;

class Forbidden extends Component {

    render() {
        
        window.location.href = FORBIDDEN_URL;
        return null;
    }
}

export default Forbidden;