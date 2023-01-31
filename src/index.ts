"use strict"

import React, { isValidElement } from "react"

const reactNodeToString = function (reactNode: React.ReactNode): string {
  let string = ""
  if (typeof reactNode === "string") {
    string = reactNode
  } else if (typeof reactNode === "number") {
    string = reactNode.toString()
  } else if (typeof reactNode === 'object' && reactNode && Symbol.iterator in reactNode) {
    for (const child of reactNode) {
      string += reactNodeToString(child)
    }
  } else if (isValidElement(reactNode)) {
    string += reactNodeToString(reactNode.props.children)
  }
  return string
}

export default reactNodeToString
