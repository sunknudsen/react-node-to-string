"use strict"

import React from "react"

const reactNodeToString = function (reactNode: React.ReactNode): string {
  let string = ""
  if (typeof reactNode === "string") {
    string = reactNode
  } else if (typeof reactNode === "number") {
    string = reactNode.toString()
  } else if (reactNode instanceof Array) {
    reactNode.forEach(function (child) {
      if (React.isValidElement(child)) {
        string += reactNodeToString(child.props.children)
      }
    })
  }
  return string
}

export default reactNodeToString
