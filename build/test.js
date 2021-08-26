"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const assert_1 = __importDefault(require("assert"));
const index_1 = __importDefault(require("./index"));
describe("react-node-to-string", () => {
    it("extracts correct string", () => {
        const tests = [
            ["lorem ipsum", "lorem ipsum"],
            [123, "123"],
            [true, ""],
            [false, ""],
            [null, ""],
            [void 0, ""],
            [["lorem", "ipsum"], "loremipsum"],
            [["lorem", jsx_runtime_1.jsx(jsx_runtime_1.Fragment, { children: "ipsum" }, void 0)], "loremipsum"],
            [jsx_runtime_1.jsx(jsx_runtime_1.Fragment, {}, void 0), ""],
            [jsx_runtime_1.jsx(jsx_runtime_1.Fragment, { children: "lorem ipsum" }, void 0), "lorem ipsum"],
            [
                jsx_runtime_1.jsxs("p", { children: [jsx_runtime_1.jsx("strong", { children: "lorem" }, void 0), "ipsum"] }, void 0),
                "loremipsum",
            ],
        ];
        tests.forEach((test, index) => {
            assert_1.default.strictEqual(index_1.default(test[0]), test[1], `Test ${index} failed`);
        });
    });
});
//# sourceMappingURL=test.js.map