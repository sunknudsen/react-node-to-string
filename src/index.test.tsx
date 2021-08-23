import * as assert from "assert";
import * as React from "react";
import reactNodeToString from "./index";


describe("reactNodeToString", () => {
  it("produces the correct string", () => {

    const cases: [ input: React.ReactNode, expectedOutput: string ][] = [
      [ "lorem ipsum", "lorem ipsum" ],
      [ null, "" ],
      [ true, "" ],
      [ false, "" ],
      [ void 0, "" ],
      [ <></>, "" ],
        [ <>lorem ipsum</>, "lorem ipsum" ],
        [ <strong key="foo"><strong>lorem</strong>ipsum</strong>, "loremipsum" ],
      [ [ "lorem", "ipsum" ], "loremipsum" ],
      [ [ "lorem", <>ipsum</> ], "loremipsum" ]
    ];

    cases.forEach((testcase, i) => {
      assert.strictEqual(reactNodeToString(testcase[0]), testcase[1], `case ${i}`);
    });

  });
});
