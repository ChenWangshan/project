import React from 'react';

const { NOT_FOUND_URL } = window.TDT_CONFIG;

/**
 * 404页面
 */
function NotFound () {
    window.location.href = NOT_FOUND_URL;
    return null;
}

export default NotFound;