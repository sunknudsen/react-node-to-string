"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
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
            string += reactNodeToString(child);
        });
    }
    else if (react_1.isValidElement(reactNode)) {
        string += reactNodeToString(reactNode.props.children);
    }
    return string;
};
exports.default = reactNodeToString;
//# sourceMappingURL=index.js.map