import React, { ReactNode } from 'react';
import assert from "assert"
import reactNodeToString from "./index"

type Test = [input: React.ReactNode, expectedOutput: string]

describe("react-node-to-string", () => {
  it("extracts correct string", () => {
    const tests: Test[] = [
      ["lorem ipsum", "lorem ipsum"],
      [123, "123"],
      [true, ""],
      [false, ""],
      [null, ""],
      [void 0, ""],
      [["lorem", "ipsum"], "loremipsum"],
      [["lorem", <>ipsum</>], "loremipsum"],
      [makeIterableNodes(["lorem", "ipsum"]), "loremipsum"],
      [<></>, ""],
      [<>lorem ipsum</>, "lorem ipsum"],
      [
        <p>
          <strong>lorem</strong>ipsum
        </p>,
        "loremipsum",
      ],
    ]
    tests.forEach((test, index) => {
      assert.strictEqual(
        reactNodeToString(test[0]),
        test[1],
        `Test ${index} failed`
      )
    })
  })
})

function makeIterableNodes (text: ReactNode[]): Iterable<ReactNode> {
  return {
    [Symbol.iterator]() {
      let i = 0
      const iterator: Iterator<ReactNode> = {
        next () {
          return {
            done: i === text.length,
            value: text[i++]
          }
        }
      }

      return iterator;
    }
  }
}
