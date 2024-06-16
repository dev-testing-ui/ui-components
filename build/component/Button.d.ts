/// <reference types="react" />
declare const DemoButton: ({ children, onHandleClick }: {
    children: JSX.Element | string;
    onHandleClick: () => void | null;
}) => import("react/jsx-runtime").JSX.Element;
export default DemoButton;
