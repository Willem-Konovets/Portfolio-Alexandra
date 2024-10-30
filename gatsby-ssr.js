import React from 'react';

export const onRenderBody = ({ setHeadComponents }) => {
    setHeadComponents([
        <link rel="preconnect" href="https://fonts.googleapis.com" key="google-fonts-preconnect" />,
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" key="google-fonts-preconnect-cors" />,
        <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap"
            rel="stylesheet"
            key="google-fonts"
        />,
    ]);
};