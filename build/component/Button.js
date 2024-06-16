"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const DemoButton = ({ children, onHandleClick }) => {
    return (0, jsx_runtime_1.jsx)("button", { onClick: onHandleClick, children: children });
};
exports.default = DemoButton;
