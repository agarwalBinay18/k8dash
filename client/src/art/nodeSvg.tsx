import React from 'react';

const NodeSvg = (props: {[key: string]: any}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18.04 17.5" {...props}>
        <path d="M8.96.46a1.14 1.13 0 0 0-.44.11L2.58 3.41a1.14 1.13 0 0 0-.61.77L.5 10.55a1.14 1.13 0 0 0 .16.86 1.14 1.13 0 0 0 .06.1l4.11 5.1a1.14 1.13 0 0 0 .9.43h6.58a1.14 1.13 0 0 0 .9-.43l4.1-5.1a1.14 1.13 0 0 0 .22-.96l-1.47-6.38a1.14 1.13 0 0 0-.61-.76L9.5.57a1.14 1.13 0 0 0-.55-.1z"/>
        <path d="M8.96 0a1.2 1.19 0 0 0-.46.12l-6.27 3a1.2 1.19 0 0 0-.65.8L.03 10.65a1.2 1.19 0 0 0 .16.91 1.2 1.19 0 0 0 .07.1l4.34 5.4a1.2 1.19 0 0 0 .94.44h6.96a1.2 1.19 0 0 0 .94-.45l4.33-5.4a1.2 1.19 0 0 0 .24-1l-1.55-6.73a1.2 1.19 0 0 0-.65-.8l-6.27-3A1.2 1.19 0 0 0 8.96 0zm0 .46a1.14 1.13 0 0 1 .55.11l5.94 2.84a1.14 1.13 0 0 1 .61.76l1.47 6.38a1.14 1.13 0 0 1-.22.95l-4.1 5.11a1.14 1.13 0 0 1-.9.43H5.72a1.14 1.13 0 0 1-.89-.42L.73 11.5a1.14 1.13 0 0 1-.07-.09 1.14 1.13 0 0 1-.16-.86l1.47-6.37a1.14 1.13 0 0 1 .61-.77L8.52.57a1.14 1.13 0 0 1 .44-.1z"
            color="#000" fontWeight="400" fontFamily="Sans" overflow="visible" fill="#fff"/>
        <text y="16.81" x="9.98"
            fontWeight="400" fontSize="10.58" fontFamily="Sans" letterSpacing="0" wordSpacing="0" fill="#fff" strokeWidth=".26" transform="translate(-1 -1.17)">
            <tspan
                y="16.81" x="9.98" fontSize="2.82" fontFamily="Arial" textAnchor="middle">node</tspan>
        </text>
        <path d="M9 2.92c-.14 0-4 1.9-4.05 1.99-.12.23-1 4.28-.94 4.37l1.4 1.78 1.35 1.69h4.44l1.42-1.77 1.41-1.76-.5-2.17A39.4 39.4 0 0 0 13 4.84c-.07-.07-3.93-1.92-4-1.92zm.2.95l.9.26-.9.26-.91-.26zm-.91.36l.85.26v1.18l-.85-.47zm1.81 0v.97l-.84.47V4.49zM7.9 5.85l.92.26-.91.26L7 6.11zm2.22 0l.9.26-.9.26-.91-.26zM7 6.2l.85.25v1.19L7 7.18zm1.82 0v.97l-.85.47V6.46zm.39 0l.85.25v1.19l-.85-.47zm1.81 0v.97l-.84.47V6.46zM7.58 7.73c.27 0 .06.28.36.42.33.16.4-.23.6.07.21.3-.18.22-.15.58s.4.23.25.56c-.16.32-.29-.05-.59.15-.3.21 0 .46-.35.5-.36.02-.1-.28-.43-.43-.33-.16-.4.23-.6-.07-.21-.3.18-.22.15-.58s-.4-.23-.24-.55c.15-.33.28.04.58-.16.3-.2 0-.46.35-.5h.07zm2.33.36c.48.01.02.47.46.66.44.2.46-.45.8-.1.33.35-.32.34-.15.8.17.45.65 0 .64.49-.02.48-.47.01-.67.45-.2.44.46.47.1.8-.35.33-.34-.32-.79-.15-.45.18 0 .66-.49.64-.48-.01-.01-.46-.46-.66-.44-.2-.46.45-.8.1-.33-.35.32-.34.15-.8-.17-.44-.65 0-.64-.48.02-.49.47-.02.67-.46.2-.44-.46-.47-.1-.8.35-.33.34.32.79.15.45-.18 0-.65.5-.64zm-2.31.25a.53.53 0 1 0 0 1.07.53.53 0 0 0 0-1.07zm2.26.48a1.06 1.06 0 1 0 0 2.13 1.06 1.06 0 0 0 0-2.13z" fill="#fff"/>
    </svg>
);

export default NodeSvg;
