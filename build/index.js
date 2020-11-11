"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const reactNodeToString = function (reactNode) {
    let string = "";
    if (typeof reactNode === "string") {
        string = reactNode;
    }
    else if (typeof reactNode === "number") {
        string = reactNode.toString();
    }
    else if (reactNode instanceof Array) {
        reactNode.forEach(function (child) {
            if (react_1.default.isValidElement(child)) {
                string += reactNodeToString(child.props.children);
            }
        });
    }
    return string;
};
exports.default = reactNodeToString;
//# sourceMappingURL=index.js.map