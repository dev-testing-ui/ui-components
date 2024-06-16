import React from "react";

const DemoButton=({children,onHandleClick}:{children: JSX.Element | string,onHandleClick:()=> void | null})=>{
    return <button onClick={onHandleClick}>{children}</button>
}

export default DemoButton;