"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const parser_1 = require("./parser");
describe('Parser Happy Flow Testing', () => {
    const stub = {
        type: "", tag: "div", children: null, css: "color:red;", value: ""
    };
    const completeStub = [
        {
            type: "", tag: "div", children: [
                {
                    type: "", tag: "h3", children: null, css: "color:blue;", value: "I am just awesome"
                }
            ], css: "color:blue;", value: null
        }, {
            type: "", tag: "h1", children: null, css: "color:red;", value: "This has the some value in it."
        }, {
            type: "", tag: "h2", children: null, css: "color:blue;", value: "This has the some less value in it."
        }
    ];
    let parser = new parser_1.Parser(stub);
    let sd = parser.parse(completeStub);
    console.log(sd, "******************");
    it("checkIfTagSelfEnding", () => {
        let isTagSelfEnding = parser.checkIfTagSelfEnding("div");
        chai_1.expect(isTagSelfEnding).equal(false);
        isTagSelfEnding = parser.checkIfTagSelfEnding('img');
        chai_1.expect(isTagSelfEnding).equal(true);
    });
});
//# sourceMappingURL=parser.spec.js.map