import React, { useState } from 'react'

import hljs from 'highlight.js'
import MarkdownParser from './MarkdownParser'

function CodeBlock(props) {
  
  hljs.highlightAll() 
  const [text, setText] = useState("")
  fetch(props.link)
    .then(res => res.text())
    .then(text => {
      setText(text)
      console.log(text);
    })
   
  return (
    <MarkdownParser source={text} />
  )
}

export default CodeBlock