import React from "react";

export function withLogging(Component) {
    console.log('withLogging', Component);
    const x = 10;

    return (props) => <Component {...props} onClick={() => {
        console.log(x);
        props.onClick();
    }} />;
}
