import React from 'react'

export interface HelloProps {
  compiler: string
  framework: string
}

const Hello = (props: HelloProps) => (
  <h1>
    Hello from {props.compiler} and111 {props.framework}!
  </h1>
)

export default Hello
